/* MicB Scientific prototype — shared logic (vanilla JS, works from file:// — no fetch needed) */
(function () {
  "use strict";
  const C = window.MICB_CONFIG, P = window.MICB_PRODUCTS;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const money = n => "৳" + Number(n).toLocaleString("en-IN");
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const byId = id => P.find(p => p.id === id);
  const store = {
    get(k, d) { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  /* ---------- cart (localStorage, demo only) ---------- */
  const cart = {
    items() { return store.get("micb_cart", []).filter(i => byId(i.id)); },
    save(a) { store.set("micb_cart", a); updateCount(); },
    add(id, q = 1) { const a = this.items(), l = a.find(i => i.id === id); l ? l.qty = Math.min(99, l.qty + q) : a.push({ id, qty: q }); this.save(a); },
    setQty(id, q) { const a = this.items(), l = a.find(i => i.id === id); if (l) { l.qty = Math.max(1, Math.min(99, q)); this.save(a); } },
    remove(id) { this.save(this.items().filter(i => i.id !== id)); },
    clear() { this.save([]); },
    count() { return this.items().reduce((n, i) => n + i.qty, 0); },
    subtotal() { return this.items().reduce((n, i) => n + byId(i.id).price * i.qty, 0); }
  };
  function updateCount() { $$("[data-cart-count]").forEach(e => { const n = cart.count(); e.textContent = n; e.hidden = n === 0; }); }

  /* ---------- helpers ---------- */
  window.micbImgFail = function (img) {   // no broken-image icons: show a labelled placeholder instead
    const d = document.createElement("div"); d.className = "img-ph"; d.setAttribute("role", "img");
    d.setAttribute("aria-label", img.alt || "Image coming soon"); d.innerHTML = "<span>Image coming soon</span>"; img.replaceWith(d);
  };
  const img = (src, alt, extra = "") => `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" ${extra} onerror="micbImgFail(this)">`;
  let toastT;
  function toast(msg) {
    let t = $(".toast"); if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2200);
  }
  function tryLogo(el, list) {   // picks up the official logo automatically once the file exists
    (function next(i) {
      if (i >= list.length) return;
      const im = new Image(); im.onload = () => { el.innerHTML = ""; im.className = "brand-img"; im.alt = C.brand; el.appendChild(im); };
      im.onerror = () => next(i + 1); im.src = list[i];
    })(0);
  }
  const wordmark = `<span class="wordmark" title="Temporary text wordmark — official logo not yet supplied">MicB<small>SCIENTIFIC</small></span>`;

  function card(p) {
    return `<article class="card">${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ""}
      <a class="card-img" href="product.html?id=${p.id}" aria-label="${esc(p.name)}">${img(p.image, p.name)}</a>
      <div class="card-body"><span class="cat">${esc(p.category)}</span>
        <h3><a href="product.html?id=${p.id}">${esc(p.name)}</a></h3>
        <div class="price">${money(p.price)}<span class="demo-tag">DEMO PRICE</span></div>
        <div class="card-actions"><button class="btn btn-primary" data-add="${p.id}">Add to cart</button><a class="btn btn-ghost" href="product.html?id=${p.id}">Details</a></div></div></article>`;
  }

  /* ---------- header / footer ---------- */
  function renderHeader() {
    const page = document.body.dataset.page, here = location.pathname.split("/").pop() || "index.html", q = new URLSearchParams(location.search).get("cat");
    const links = [["Home", "index.html"], ["Shop", "shop.html"], ["Telescopes", "shop.html?cat=telescopes"], ["Microscopes", "shop.html?cat=microscopes"], ["Accessories", "shop.html?cat=accessories"], ["Learn", "learn.html"], ["About", "about.html"], ["Contact", "contact.html"]];
    const cur = ([, h]) => { const [f, s] = h.split("?"); return f === here && ((s ? s.split("=")[1] === q : !q)); };
    $("#site-header").innerHTML = `
      <div class="announce" id="announce">${esc(C.announcement)}<button aria-label="Close announcement">×</button></div>
      <header class="site-header"><div class="container nav-row">
        <a class="brand" href="index.html" aria-label="${esc(C.brand)} home">${wordmark}</a>
        <nav class="main-nav" id="nav" aria-label="Main">${links.map(l => `<a href="${l[1]}" ${cur(l) ? 'aria-current="page"' : ""}>${l[0]}</a>`).join("")}</nav>
        <div class="nav-tools">
          <form class="search" action="shop.html" role="search"><label class="sr" for="hs">Search products</label><input id="hs" name="q" type="search" placeholder="Search products"><button aria-label="Search">⌕</button></form>
          <a class="cart-link" href="cart.html" aria-label="Cart"><span aria-hidden="true">🛒</span><span class="cart-count" data-cart-count hidden>0</span></a>
          <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="nav" aria-label="Menu">☰</button>
        </div></div></header>`;
    $("#announce button").onclick = () => $("#announce").remove();
    const mb = $("#menuBtn"), nav = $("#nav");
    mb.onclick = () => { const o = nav.classList.toggle("open"); mb.setAttribute("aria-expanded", o); };
    document.addEventListener("keydown", e => { if (e.key === "Escape") { nav.classList.remove("open"); mb.setAttribute("aria-expanded", false); } });
    tryLogo($("#site-header .brand"), C.logoCandidates);
  }
  function renderFooter() {
    const wa = C.whatsapp ? `<li><a href="https://wa.me/${C.whatsapp}" rel="noopener">WhatsApp</a></li>` : "";
    $("#site-footer").innerHTML = `<footer class="site-footer"><div class="container">
      <div class="foot-grid">
        <div><a class="brand" href="index.html">${wordmark}</a><p>Science, astronomy and educational products for curious minds in Bangladesh.<br><strong>${esc(C.tagline)}</strong></p></div>
        <div><h4>Shop</h4><ul>${C.categories.map(c => `<li><a href="shop.html?cat=${c.slug}">${esc(c.name)}</a></li>`).join("")}</ul></div>
        <div><h4>Help</h4><ul><li><a href="faq.html">FAQ</a></li><li><a href="learn.html">Learning Center</a></li><li><a href="contact.html">Contact</a></li>
          ${["shipping", "returns", "preorder", "warranty", "privacy", "terms"].map(k => `<li><a href="policy.html?p=${k}">${k === "preorder" ? "Pre-order policy" : k[0].toUpperCase() + k.slice(1)}${k === "shipping" ? " &amp; delivery" : ""}</a></li>`).join("")}</ul></div>
        <div><h4>Contact <small>(verify before launch)</small></h4><ul><li><a href="tel:${C.phone.replace(/-/g, "")}">${esc(C.phone)}</a></li><li><a href="mailto:${C.email}">${esc(C.email)}</a></li>${wa}
          <li>${esc(C.address)}</li><li><a href="${C.social.facebook}" rel="noopener" target="_blank">Facebook</a> · <a href="${C.social.youtube}" rel="noopener" target="_blank">YouTube</a></li></ul></div>
      </div>
      <div class="foot-note"><span>© ${new Date().getFullYear()} ${esc(C.brand)}. Prototype — not a live store.</span><span>Demo prices and AI-generated demo images.</span></div></div></footer>`;
    tryLogo($("#site-footer .brand"), C.logoWhiteCandidates);
  }

  /* ---------- global click: add to cart ---------- */
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-add]"); if (!b) return;
    const qEl = $("#pdQty"), q = qEl ? Math.max(1, +qEl.value || 1) : 1;
    cart.add(b.dataset.add, q); toast(`${byId(b.dataset.add).name} added to cart`);
    if (b.dataset.buy) location.href = "cart.html";
  });

  /* ---------- forms helpers ---------- */
  function setErr(input, msg) { const f = input.closest(".field"); if (!f) return; f.classList.toggle("bad", !!msg); const e = $(".err", f); if (e) e.textContent = msg || ""; }
  const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  const phoneOk = v => /^(\+?88)?01[3-9]\d{8}$/.test(v.replace(/[\s-]/g, ""));
  function validate(form, rules) {
    let first = null;
    rules.forEach(([name, fn]) => { const el = form.elements[name]; const m = fn(el.value.trim()); setErr(el, m); if (m && !first) first = el; });
    if (first) first.focus(); return !first;
  }
  const req = label => v => v ? "" : `${label} is required.`;

  /* ---------- pages ---------- */
  const pages = {
    home() {
      $("#catGrid").innerHTML = C.categories.map(c => `<a class="cat-card" href="shop.html?cat=${c.slug}">
        <div class="cat-img ${c.contain ? "contain" : ""}">${img(c.image, c.name + " category", c.zoom ? `style="transform:scale(${c.zoom})"` : "")}</div>
        <div class="cat-body"><h3>${esc(c.name)}</h3><p>${esc(c.desc)}</p><span>Shop now →</span></div></a>`).join("");
      $("#featured").innerHTML = P.filter(p => p.featured).slice(0, 8).map(card).join("");
      newsletter();
    },
    shop() {
      const u = new URLSearchParams(location.search);
      const st = { q: u.get("q") || "", cat: u.get("cat") || "all", max: C.priceMax, sort: "featured" };
      const cats = [["all", "All products"], ...C.categories.map(c => [c.slug, c.name])];
      $("#catList").innerHTML = cats.map(([s, n]) => `<label><input type="radio" name="cat" value="${s}" ${st.cat === s ? "checked" : ""}> ${esc(n)} <small>(${s === "all" ? P.length : P.filter(p => p.group === s).length})</small></label>`).join("");
      const q = $("#q"), mx = $("#max"), so = $("#sort"); q.value = st.q; mx.max = C.priceMax; mx.value = C.priceMax;
      function run() {
        const t = st.q.toLowerCase();
        let r = P.filter(p => (st.cat === "all" || p.group === st.cat) && p.price <= st.max && (!t || (p.name + " " + p.category + " " + p.description + " " + p.shortDescription).toLowerCase().includes(t)));
        if (st.sort === "low") r.sort((a, b) => a.price - b.price); else if (st.sort === "high") r.sort((a, b) => b.price - a.price);
        else if (st.sort === "az") r.sort((a, b) => a.name.localeCompare(b.name)); else r.sort((a, b) => P.indexOf(a) - P.indexOf(b));
        $("#count").textContent = `${r.length} product${r.length === 1 ? "" : "s"}`; $("#maxOut").textContent = money(st.max);
        $("#results").innerHTML = r.length ? `<div class="grid">${r.map(card).join("")}</div>` : `<div class="empty"><h3>No products found</h3><p>Try a different search or clear the filters.</p><button class="btn btn-primary" id="clr2">Clear filters</button></div>`;
        const c2 = $("#clr2"); if (c2) c2.onclick = clear;
      }
      function clear() { st.q = ""; st.cat = "all"; st.max = C.priceMax; st.sort = "featured"; q.value = ""; mx.value = C.priceMax; so.value = "featured"; $$("input[name=cat]")[0].checked = true; run(); }
      q.oninput = () => { st.q = q.value; run(); }; mx.oninput = () => { st.max = +mx.value; run(); }; so.onchange = () => { st.sort = so.value; run(); };
      $("#catList").onchange = e => { st.cat = e.target.value; run(); }; $("#clr").onclick = clear;
      $("#ftoggle").onclick = () => $("#filters").classList.toggle("open"); run();
    },
    product() {
      const id = new URLSearchParams(location.search).get("id"), p = byId(id), box = $("#pd");
      if (!p) { box.innerHTML = `<div class="empty" style="grid-column:1/-1"><h2>Product not found</h2><a class="btn btn-primary" href="shop.html">Back to shop</a></div>`; return; }
      document.title = `${p.name} | ${C.brand}`;
      $("#crumbs").innerHTML = `<a href="index.html">Home</a> / <a href="shop.html">Shop</a> / <a href="shop.html?cat=${p.group}">${esc(p.category)}</a> / ${esc(p.name)}`;
      box.innerHTML = `<div class="gallery">${img(p.image, p.name)}</div>
        <div><span class="cat">${esc(p.category)}</span><h1>${esc(p.name)}</h1>
          <div class="price">${money(p.price)}<span class="demo-tag">DEMO PRICE</span></div>
          <p><strong>Availability:</strong> Demo listing — stock not confirmed</p><p>${esc(p.shortDescription)}</p>
          <div class="notice">Demo product image (AI-generated). Not an actual MicB Scientific product photo; model and specifications are unconfirmed.</div>
          <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin:18px 0">
            <div class="qty"><button type="button" id="qm" aria-label="Decrease quantity">−</button><input id="pdQty" type="number" value="1" min="1" max="99" aria-label="Quantity"><button type="button" id="qp" aria-label="Increase quantity">+</button></div>
            <button class="btn btn-primary" data-add="${p.id}">Add to cart</button><button class="btn btn-outline" data-add="${p.id}" data-buy="1">Buy now</button></div>
          <p class="form-note">Delivery charge and time: to be confirmed. Checkout is a demo only.</p></div>
        <div style="grid-column:1/-1"><h2>Description</h2><p>${esc(p.description)}</p><h2>Specifications</h2>
          <table class="spec">${Object.entries(p.specifications).map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}</table></div>`;
      const qi = $("#pdQty"); $("#qm").onclick = () => qi.value = Math.max(1, +qi.value - 1); $("#qp").onclick = () => qi.value = Math.min(99, +qi.value + 1);
      $("#related").innerHTML = P.filter(x => x.group === p.group && x.id !== p.id).concat(P.filter(x => x.group !== p.group)).slice(0, 4).map(card).join("");
    },
    cart() {
      function draw() {
        const it = cart.items(), box = $("#lines");
        if (!it.length) { box.innerHTML = `<div class="empty"><h3>Your cart is empty</h3><a class="btn btn-primary" href="shop.html">Continue shopping</a></div>`; $("#sum").hidden = true; return; }
        $("#sum").hidden = false;
        box.innerHTML = it.map(i => { const p = byId(i.id); return `<div class="line"><a class="thumb" href="product.html?id=${p.id}">${img(p.image, p.name)}</a>
          <div><h3><a href="product.html?id=${p.id}" style="text-decoration:none">${esc(p.name)}</a></h3><div>${money(p.price)} <span class="demo-tag">DEMO</span></div>
            <div class="qty" style="margin-top:8px"><button data-q="-1" data-id="${p.id}" aria-label="Decrease quantity of ${esc(p.name)}">−</button><input value="${i.qty}" readonly aria-label="Quantity"><button data-q="1" data-id="${p.id}" aria-label="Increase quantity of ${esc(p.name)}">+</button></div></div>
          <div style="text-align:right"><strong>${money(p.price * i.qty)}</strong><br><button class="rm" data-rm="${p.id}">Remove</button></div></div>`; }).join("");
        $("#sub").textContent = money(cart.subtotal()); $("#tot").textContent = money(cart.subtotal());
      }
      $("#lines").onclick = e => { const q = e.target.closest("[data-q]"), r = e.target.closest("[data-rm]");
        if (q) { const l = cart.items().find(i => i.id === q.dataset.id); cart.setQty(q.dataset.id, l.qty + +q.dataset.q); } if (r) { cart.remove(r.dataset.rm); toast("Item removed"); } draw(); };
      $("#coupon").onsubmit = e => { e.preventDefault(); toast("Coupons are not available in this demo"); };
      draw();
    },
    checkout() {
      const it = cart.items(), f = $("#coForm");
      function sum() { $("#coItems").innerHTML = it.map(i => `<div class="row"><span>${esc(byId(i.id).name)} × ${i.qty}</span><span>${money(byId(i.id).price * i.qty)}</span></div>`).join(""); $("#coTot").textContent = money(cart.subtotal()); }
      if (!it.length) { $("#coWrap").innerHTML = `<div class="empty"><h3>Your cart is empty</h3><a class="btn btn-primary" href="shop.html">Go to shop</a></div>`; return; }
      sum();
      f.onsubmit = e => { e.preventDefault();
        const ok = validate(f, [["name", req("Name")], ["phone", v => !v ? "Phone number is required." : phoneOk(v) ? "" : "Enter a valid Bangladesh mobile number (e.g. 01XXXXXXXXX)."],
          ["email", v => !v || emailOk(v) ? "" : "Enter a valid email address."], ["address", req("Address")], ["district", req("District / city")]]);
        if (!ok) return;
        const no = "DEMO-" + Date.now().toString(36).toUpperCase(); cart.clear();   // nothing is sent anywhere
        $("#coWrap").innerHTML = `<div class="ok-box"><h2>Demo order complete</h2><p>Demo order number: <strong>${no}</strong></p><p><strong>Prototype only — this order was NOT submitted to MicB Scientific.</strong> No data was sent or stored. Real ordering needs a backend and payment integration.</p><a class="btn btn-primary" href="shop.html">Back to shop</a></div>`;
        window.scrollTo({ top: 0, behavior: "smooth" }); };
    },
    contact() {
      const f = $("#cForm");
      f.onsubmit = e => { e.preventDefault();
        if (!validate(f, [["name", req("Name")], ["contact", v => !v ? "Email or phone is required." : (emailOk(v) || phoneOk(v)) ? "" : "Enter a valid email or BD phone number."], ["subject", req("Subject")], ["message", req("Message")]])) return;
        f.reset(); $("#cOk").hidden = false; $("#cOk").focus(); };
    },
    learn() { /* static <details> content */ },
    policy() {
      const k = new URLSearchParams(location.search).get("p") || "shipping", T = C.policies || {};
      const names = { shipping: "Shipping & Delivery", returns: "Returns & Refunds", preorder: "Pre-order Policy", warranty: "Warranty Policy", privacy: "Privacy Policy", terms: "Terms & Conditions" };
      const n = names[k] || names.shipping; document.title = `${n} | ${C.brand}`; $("#pTitle").textContent = n;
    }
  };
  function newsletter() {
    const f = $("#nlForm"); if (!f) return;
    f.onsubmit = e => { e.preventDefault(); const i = f.elements.email;
      if (!emailOk(i.value.trim())) { setErr(i, "Enter a valid email address."); i.focus(); return; } setErr(i, ""); f.reset(); toast("Demo only — you were not subscribed"); };
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHeader(); renderFooter(); updateCount();
    const f = pages[document.body.dataset.page]; if (f) f();
  });
})();
