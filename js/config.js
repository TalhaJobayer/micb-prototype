/* ===== MicB Scientific — editable site settings (one place) =====
   All contact info, links and demo notices live here.
   Everything marked "verify" is UNCONFIRMED — check with the business before launch. */
window.MICB_CONFIG = {
  brand: "MicB Scientific",
  tagline: "Explore. Learn. Discover.",
  phone: "01517-811481",                 // verify
  email: "micbscientific@gmail.com",     // verify
  whatsapp: "",                          // leave empty until WhatsApp is confirmed; then e.g. "8801517811481"
  address: "Showroom address to be confirmed",   // two conflicting listings found — do not publish yet
  social: {                              // verify
    facebook: "https://www.facebook.com/micbscientific",
    youtube: "https://www.youtube.com/@MicBScientific"
  },
  // Logo: put the official file in assets/images/logo/ — it is picked up automatically (first one found).
  logoCandidates: ["assets/images/logo/micb-logo.svg", "assets/images/logo/micb-logo.png"],
  logoWhiteCandidates: ["assets/images/micb-logo-white.png", "assets/images/logo/micb-logo-white.png"],
  announcement: "Prototype site · demo prices and AI-generated demo images · not a live store",
  priceMax: 70000,
  // cropLeft/zoom only hide screenshot-text fragments baked into the supplied category crops.
  categories: [
    { slug: "telescopes",   name: "Telescopes",            desc: "Refractors, reflectors and Dobsonians.", image: "assets/images/categories/telescopes.jpg" },
    { slug: "binoculars",   name: "Binoculars",            desc: "Astronomy and observation binoculars.",  image: "assets/images/categories/binoculars.jpg" },
    { slug: "microscopes",  name: "Microscopes",           desc: "Beginner and digital microscopes.",      image: "assets/images/categories/microscopes.jpg", zoom: 1.05 },
    { slug: "accessories",  name: "Astronomy Accessories", desc: "Eyepieces, Barlow lenses, filters, tripods.", image: "assets/images/categories/accessories.jpg" },
    { slug: "kits",         name: "Science Kits",          desc: "Experiment and STEM learning kits.",     image: "assets/images/categories/science-kits.jpg", zoom: 1.05 },
    { slug: "collectibles", name: "Collectibles & Space Gifts", desc: "Specimens, puzzles and space gifts.", image: "assets/images/categories/collectibles.jpg", contain: true }
  ]
};
