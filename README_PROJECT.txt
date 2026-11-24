# MicB Scientific — Website Project README

> **Project:** MicB Scientific Website (Frontend Prototype)  
> **Purpose:** Build a premium, responsive science & astronomy storefront prototype using **HTML, CSS, and vanilla JavaScript**.  
> **Audience:** Bangladesh-based customers, science enthusiasts, students, educators, hobbyists, and institutions.  
> **Status:** Initial project brief based on information gathered from public online/Facebook references and preliminary assumptions. Verify all business details before publishing.

---

## 1. Project Goals

Create a polished, trustworthy, modern website for MicB Scientific that functions as:

1. An online catalog/storefront for scientific, astronomy, educational, and related products.
2. A brand presentation website that introduces MicB Scientific and its mission.
3. A science learning/discovery platform featuring articles and beginner guides.
4. A frontend prototype that can later be integrated with WooCommerce, a backend, payment gateway, inventory, and order-management system.

### Brand positioning (working direction)
MicB Scientific should feel like a trusted specialist science store: curious, educational, technically credible, accessible to beginners, and premium without feeling intimidating.

Suggested brand message:
**Explore. Learn. Discover.**

Possible hero headline:
**Explore the Universe. Discover the Science.**
Supporting copy: *Discover telescopes, microscopes, astronomy accessories, science kits, and tools for curious minds.*
CTA examples: `Shop Products` and `Explore Astronomy`.

These are proposed marketing copy, not verified official slogans.

---

## 2. Information Gathered / Preliminary Business Profile

The following are preliminary details from public online references. They may be incomplete, old, or inconsistent; verify with the business before making them live.

- **Business/brand name:** MicB Scientific
- **Country:** Bangladesh
- **Primary market:** Science enthusiasts, students, hobbyists, educators, schools/educational institutions
- **Business focus:** Scientific products, telescopes, astronomy, microscopes, educational products, science collectibles, and science-related outreach
- **Reported establishment year:** 2020 (public business profile; confirm)
- **Website listed:** https://micbscientific.com/
- **Email listed:** micbscientific@gmail.com
- **Phone listed:** 01517-811481
- **Potential WhatsApp/contact number:** 01517-811481 (confirm WhatsApp availability)
- **Publicly mentioned showroom/address (one listing):** Shop No. 4, 6/28, Tajmahal Road, Block-C, Mohammadpur, Dhaka, Bangladesh
- **Another address found in an online listing:** Atibazar, Hazi Hossain Shopping Complex, Shop No. 115 (details and current status not verified)

### Important verification note
Address listings conflict. Do not publish a single address as definitive until the owner confirms which location is current and whether there are multiple branches/showrooms. Contact details and policies also need confirmation.

### Public/social links (to verify)
- Website: https://micbscientific.com/
- Facebook: https://www.facebook.com/micbscientific
- YouTube: https://www.youtube.com/@MicBScientific
- Email: micbscientific@gmail.com

The Facebook page and public online references were used as inspiration/context, but this brief does **not** claim every product, price, photo, policy, or detail is currently offered. Check the official page and obtain permission/approved assets for production use.

---

## 3. Website Type and Scope

### Prototype phase
Build the frontend using only:
- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

No framework is required for this initial prototype. Avoid build tools unless the developer chooses to add one.

### Recommended later production architecture (not part of current prototype)
- WordPress CMS
- WooCommerce for catalog, cart, orders, and checkout
- Custom HTML/CSS/JS for bespoke design components
- Gutenberg for editable blog/educational content
- Payment integration for supported Bangladesh payment methods
- Backend/order database and secure admin workflow

**Do not simulate real payments or claim orders are actually placed in this frontend prototype.** Use a clearly labeled demo interaction and explain that real checkout requires backend/payment integration.

---

## 4. Target Users

1. Beginner astronomy hobbyists looking for their first telescope.
2. Experienced astronomy enthusiasts seeking equipment/accessories.
3. Students and parents buying educational science products.
4. Teachers, schools, colleges, universities, and labs.
5. Microscope users and science hobbyists.
6. Gift shoppers looking for science-themed products.
7. Science-curious visitors who need educational content before purchasing.

---

## 5. Product Categories (Proposed Catalog Taxonomy)

Use categories that can be expanded or renamed after the business confirms its inventory.

1. **Telescopes**
   - Beginner refractor telescopes
   - Refractor telescopes
   - Reflector telescopes
   - Dobsonian telescopes
   - GoTo / computerized telescopes (only if available)
2. **Binoculars**
   - Astronomy binoculars
   - Outdoor/observation binoculars (if offered)
3. **Microscopes**
   - Beginner/educational microscopes
   - Digital microscopes
   - Accessories (only where inventory exists)
4. **Astronomy Accessories**
   - Eyepieces
   - Barlow lenses
   - Moon/planetary filters
   - Mounts and tripods
   - Adapters and other accessories
5. **Science Kits & Educational Products**
   - Experiment kits
   - STEM/educational kits
   - Science toys and learning tools
6. **Fossils & Meteorites / Science Collectibles**
   - Specimens and collectibles (only if available and authentic)
7. **Space & Astronomy Gifts / Puzzles**
   - Space-themed puzzles/building sets and gift products

Do not create categories with no products in the final populated catalog unless there is a deliberate “coming soon” state.

---

## 6. Sample Products and Placeholder Prices

These sample products/prices are **development placeholders only**. They are not confirmed MicB Scientific prices, inventory, model names, or offers. Use them to build product cards and test filtering/cart behavior. Add a clear prototype/demo notice in development and replace with confirmed data before publishing.

| ID | Product name (sample) | Category | Placeholder price (BDT) |
|---|---|---|---:|
| P001 | Beginner Refractor Telescope | Telescopes | 8,500 |
| P002 | 70mm Astronomical Telescope | Telescopes | 12,500 |
| P003 | 114mm Reflector Telescope | Telescopes | 22,000 |
| P004 | 130mm Reflector Telescope | Telescopes | 45,000 |
| P005 | 150mm Dobsonian Telescope | Telescopes | 65,000 |
| P006 | Astronomy Binocular 10×50 | Binoculars | 8,000 |
| P007 | Beginner Microscope | Microscopes | 5,500 |
| P008 | Digital Microscope | Microscopes | 9,500 |
| P009 | Telescope Eyepiece Set | Accessories | 6,500 |
| P010 | 2× Barlow Lens | Accessories | 2,000 |
| P011 | Moon Filter | Accessories | 1,500 |
| P012 | Telescope Tripod | Accessories | 4,000 |
| P013 | Science Experiment Kit | Science Kits | 1,800 |
| P014 | Space Shuttle Building Puzzle | Space Gifts/Puzzles | 3,500 |
| P015 | Meteorite Specimen (sample listing) | Collectibles | 2,500 |

### Product data structure (recommended)
Every product should support:
- `id`
- `name`
- `slug`
- `category`
- `price` (integer BDT; placeholder until confirmed)
- `compareAtPrice` (optional)
- `shortDescription`
- `description`
- `image` / `images` (use local assets or approved image URLs)
- `specifications` (key/value pairs)
- `availability` (`in-stock`, `out-of-stock`, `pre-order`, `demo`)
- `featured`
- `badge` (optional: New, Popular, Beginner-friendly)
- `brand` (if applicable and verified)
- `rating` and `reviewCount` (do not invent; omit or clearly mark demo)
- `shippingNote`
- `warranty` (only when confirmed)

Do not invent technical specifications (aperture, focal length, magnification, included accessories, warranty, manufacturer, or stock) for real products. Placeholder listings can use clearly marked sample specs or “Specifications to be confirmed.”

---

## 7. Product Images and Logo / Brand Assets

### Assets to collect
- Official MicB Scientific logo in high resolution (SVG preferred, PNG with transparent background acceptable)
- Approved product photos for every actual product
- Category images
- Hero/banner image (astronomy/space or actual product photography)
- Brand/partner logos (only if approved)
- Real showroom photos (optional)
- Educational article images (license/permission required)

### Asset sourcing rules
- Use official Facebook/website images as **visual references** where possible.
- Do not hotlink Facebook images in the final site.
- Do not assume public social media images are free for reuse. Obtain permission or use approved assets.
- If original assets cannot be obtained during prototype development, use royalty-free images or generated placeholders and clearly identify them as temporary.
- Do not make an imitation logo. Use the original logo file if supplied; otherwise create a temporary text-based brand treatment that does not falsely claim to be the official logo.
- Product images should be clean, consistent, preferably isolated or studio-style, with consistent crop and aspect ratio.

### Exact image folder + filename workflow (USER WILL ADD IMAGES LATER)
The user will manually download approved images and put them into the project's local `assets/images/` folders using the exact filenames below. **Implement the website to use these exact relative paths.** When a matching file is added later, it should display automatically wherever its path is referenced in the data/config. No image upload feature or database is needed for this static prototype.

Create this folder structure:
```text
micb-scientific-website/
  assets/
    images/
      logo/
        micb-logo.png
      micb-logo.svg          (optional; use SVG if supplied)
      micb-logo-white.png    (optional)
      hero/
        hero-featured-telescope.jpg
        featured-telescope-cutout.png
      categories/
        telescopes.jpg
        binoculars.jpg
        microscopes.jpg
        accessories.jpg
        science-kits.jpg
        collectibles.jpg
      products/
        p001-beginner-refractor-telescope.jpg
        p002-70mm-astronomical-telescope.jpg
        p003-114mm-reflector-telescope.jpg
        p004-130mm-reflector-telescope.jpg
        p005-150mm-dobsonian-telescope.jpg
        p006-astronomy-binocular-10x50.jpg
        p007-beginner-microscope.jpg
        p008-digital-microscope.jpg
        p009-telescope-eyepiece-set.jpg
        p010-2x-barlow-lens.jpg
        p011-moon-filter.jpg
        p012-telescope-tripod.jpg
        p013-science-experiment-kit.jpg
        p014-space-shuttle-building-puzzle.jpg
        p015-meteorite-specimen.jpg
      blog/
        ...
      icons/
        ...
```

#### Prebuilt demo image pack
- A ZIP pack is available with organized, generated demo visuals matching the filenames above: `MicB_Scientific_Image_Pack.zip`.
- Unzip it into the project root so the `assets/` folder merges into the existing project.
- These are illustrative AI-generated assets, not verified MicB inventory photos or exact models. Replace them with authorized real product images before publishing.

#### Image-to-product mapping rules
- In the product data (e.g., `products.js` or a clearly organized product array inside JS), set each product's image field to the matching local path, such as `assets/images/products/p001-beginner-refractor-telescope.jpg`.
- Hero should use `assets/images/hero/featured-telescope-cutout.png` for the foreground product if provided; otherwise use `assets/images/hero/hero-featured-telescope.jpg` as the banner image if available.
- Category tiles should reference the exact category filenames above.
- The logo should reference `assets/images/logo/micb-logo.png` (prefer SVG if it exists and is supported).
- Use the same product image path consistently on product cards, detail views, and cart thumbnail, where appropriate.
- If an image file is not yet present, render a tasteful neutral placeholder with a label such as `Image coming soon` or a locally created CSS placeholder. Do not show broken-image icons and do not substitute unrelated products.
- Use relative local paths; do not hotlink images from Facebook or other websites.
- Use `alt` text describing the product/category. Keep image proportions and avoid cropping the product itself.
- If the user later replaces a file but keeps the exact same filename/path, the website should show the replacement without changing product code. If they choose a different filename, update the corresponding image path in the product/category/hero data.

#### How the user will add images (manual workflow)
1. Download the product image to their computer (prefer the original/high-resolution image; use approved images and respect usage rights).
2. Rename it to the exact filename listed above. In Windows, ensure the real extension is `.jpg`, `.png`, or `.webp` (avoid accidentally naming it `.jpg.jpg`).
3. Put it inside the matching folder under `assets/images/`.
4. Keep the website project folder and the `assets` folder together. Do not move/rename folders after the code references them.
5. If using Claude to build/edit the prototype, give Claude the project folder (or ZIP) containing README and assets; for Claude Code, open the project folder itself. Claude should use these local paths and not invent remote image URLs.

Image formats: JPG/JPEG for photographs, PNG for transparent cutouts/logos, and WebP is also acceptable if the code references the correct extension. Prefer product images with a clean background and sufficient resolution. Do not use screenshots of product listings if a clean product photo can be obtained.

### Suggested asset folder
Use the exact folder and filenames in the detailed mapping above; that mapping is the source of truth for image paths.
```

---

## 8. Brand and Visual Design Direction

This is a suggested design system. Exact official brand colors should be extracted from the approved logo/brand assets.

### Mood
- Premium science and technology
- Modern, clean, curious, educational
- Space-inspired but not overly “gaming” or neon
- Trustworthy Bangladeshi specialist retailer
- Easy to use for non-technical customers

### Proposed palette (temporary)
Use CSS variables so colors can be changed quickly after logo review.

```css
:root {
  --color-primary: #0B1F3A;       /* deep navy */
  --color-primary-2: #153B66;     /* blue */
  --color-accent: #35B6E8;        /* cyan */
  --color-accent-2: #72D5F4;
  --color-text: #17212B;
  --color-muted: #667085;
  --color-bg: #F7F9FC;
  --color-surface: #FFFFFF;
  --color-border: #E4EAF1;
  --color-success: #168A55;
  --color-warning: #B7791F;
  --color-danger: #C0392B;
}
```

### Typography
Use a legible modern sans-serif. Suggested:
- `Inter` or `Manrope` for English UI (web font if permitted; include fallback)
- Bengali UI/content should support a readable Bengali font such as `Noto Sans Bengali` if needed.
- Keep headings bold and clean; body text comfortable and readable.

### UI style
- Generous whitespace
- Consistent grid and spacing
- Rounded cards (moderate radius, not excessive)
- Soft shadows only where needed
- Clear button hierarchy
- High contrast and accessible text
- Subtle motion and hover transitions
- Avoid clutter and excessive gradients
- Responsive product images

---

## 9. Required Pages and Routes (Prototype)

For a multi-page prototype, implement these pages. If choosing a single-page app-like structure, keep navigation and content states organized and accessible.

1. **Home** (`index.html`)
2. **Shop / All Products** (`shop.html`)
3. **Category pages** or category filtering on Shop
4. **Product Detail** (`product.html` or dynamic modal/detail route)
5. **About Us** (`about.html`)
6. **Science Learning / Blog** (`learn.html` or `blog.html`)
7. **Article Detail** (sample article)
8. **Contact Us** (`contact.html`)
9. **FAQ** (`faq.html`)
10. **Cart** (`cart.html`)
11. **Checkout Demo** (`checkout.html`)
12. **Order Tracking Demo** (`track-order.html`)
13. **Shipping & Delivery** (`shipping.html`)
14. **Return & Refund** (`returns.html`)
15. **Pre-order Policy** (`preorder.html`)
16. **Warranty Policy** (`warranty.html`)
17. **Privacy Policy** (`privacy.html`)
18. **Terms & Conditions** (`terms.html`)

If time is limited, prioritize: Home, Shop, Product Detail, About, Learn/Blog, Contact, Cart, Checkout Demo, and policy pages.

---

## 10. Homepage — Detailed Sections

### 10.1 Announcement bar
- Short message, e.g. “Explore science • Astronomy • Educational products”
- Optional delivery announcement, but do not claim free delivery or a specific delivery time until verified.
- Optional close button.

### 10.2 Header / Navigation
- Logo
- Main navigation: Home, Shop, Telescopes, Microscopes, Accessories, Learn, About, Contact
- Search field or search icon that opens search
- Account icon (prototype)
- Wishlist icon (optional prototype)
- Cart icon with live item count
- Mobile hamburger navigation
- Sticky header (optional, ensure it doesn't take too much space)

### 10.3 Hero section — FOLLOW THE USER'S PICSTOP REFERENCE

The user supplied a PicStop homepage screenshot as the **layout/style reference**. Build MicB Scientific's hero banner in a similar product-focused ecommerce style, not as a generic full-screen galaxy hero.

#### Reference layout and visual direction
- A wide, shallow banner (roughly 3.5:1 to 4:1 desktop aspect ratio, similar to the supplied screenshot).
- White or very light neutral background; clean, spacious, premium ecommerce feel.
- Left area: MicB Scientific logo/brand mark (use the provided official logo asset), headline, short description, and a strong `SHOP NOW` button.
- Center/right area: a large, high-quality cutout or studio product image of the featured telescope, visually dominant and not obscured by text.
- Far-right area (if the layout allows): a compact three-step feature/benefit graphic with simple icons and short labels, inspired by the reference's visual hierarchy. Use generic copy such as `CHOOSE`, `SET UP`, `EXPLORE`; do not make unverified claims about a specific product.
- Keep the composition balanced and avoid excessive decorative effects, oversized gradients, or a full-bleed galaxy background.
- Use product photography and subtle visual accents (thin lines, small star/planet motifs if tasteful).
- CTA should be dark/black or brand-primary, high contrast, and clearly clickable.
- Use responsive behavior: on tablet simplify the right-side feature graphic; on mobile stack the text and product image, hide/reflow secondary feature steps if necessary, and keep the CTA visible.
- The hero should resemble the screenshot's **layout concept**, but must not copy PicStop's logo, text, exact graphic assets, or proprietary design details.

#### Hero content (draft)
- Featured product: use a telescope that is confirmed in MicB Scientific's inventory. If the real featured product has not yet been confirmed, use a clearly labeled demo telescope/product image for the prototype.
- Headline: `Explore Beyond the Ordinary`
- Supporting copy: `Discover telescopes, astronomy essentials, and scientific tools for curious minds.`
- CTA: `SHOP NOW` → Shop/catalog page or featured product.
- Optional small product label: `FEATURED TELESCOPE` (only if the featured product is identified).

#### Hero image asset requirements
- Prefer a genuine MicB Scientific product photograph with permission/approval, ideally a clean product cutout on a white/transparent background.
- If a genuine featured-product image is not available, create/use a temporary demo image clearly identified as a placeholder; do not imply that a generic telescope is a product actually sold by MicB Scientific.
- Recommended desktop composition: telescope placed center-right/right, with open negative space on the left for copy; optional clean space at far right for the feature-step graphic.
- Image should be wide-banner compatible and high resolution; do not place text, logos, watermarks, or fake product labels inside the generated image. The webpage itself should render the text and logo as HTML.
- Suggested asset paths:
  - `assets/images/hero/hero-featured-telescope.jpg` (background/scene if used)
  - `assets/images/hero/featured-telescope-cutout.png` (product cutout, ideally transparent)
- Use the image with appropriate `object-fit` / positioning and avoid cropping essential parts of the telescope.

#### Suggested HTML structure
1. Hero/banner wrapper
2. Left content column (logo optional if header already has the logo; headline, paragraph, CTA)
3. Main featured product image
4. Right-side feature steps (optional and responsive)
5. Pagination/slide indicator only if implementing a carousel; otherwise omit.

Do not add a carousel merely to imitate screenshot dots. A single well-designed hero banner is preferred for the prototype unless multiple verified featured products/images are available.

### 10.4 Shop by Category
Show 6 category tiles:
- Telescopes
- Binoculars
- Microscopes
- Astronomy Accessories
- Science Kits
- Collectibles / Space Gifts

Each tile should have:
- Image
- Category name
- Short descriptor
- Link/filter action

### 10.5 Featured products
- 4–8 product cards
- Product image, title, category, placeholder price (BDT), badge only if supported by demo data
- Quick add-to-cart
- Product details action
- Avoid fake ratings or reviews

### 10.6 Beginner guide / discovery section
Possible headline: “Not sure where to start?”
Cards:
- Choosing your first telescope
- Understanding telescope magnification
- Beginner’s guide to microscopes
- Exploring the night sky

These can link to demo articles or the Learning Center.

### 10.7 Why MicB Scientific?
Suggested value proposition cards (draft, confirm):
- Science for everyone
- Explore and learn
- Tools for discovery
- Support for curious minds

Do not claim warranty, expert consultation, official authorization, or guaranteed quality unless confirmed.

### 10.8 Brand/product feature strip
Use brand logos only if confirmed and approved. Otherwise use product category icons or “Explore scientific equipment” cards.

### 10.9 Science / Learning Center
- Latest articles
- Educational content
- Astronomy tips
- Science explainers
- CTA to view all articles

### 10.10 Trust / service information
Potential items:
- Delivery options
- Contact support
- Secure checkout (only after real payment integration; in prototype label checkout demo)
- Return information (only once official policy is confirmed)

### 10.11 Newsletter
- Email field
- Consent text
- Demo success state only; no actual email subscription without backend integration

### 10.12 Footer
- Logo/brand summary
- Navigation links
- Shop categories
- Contact info (mark “verify before launch” in project notes)
- Social links (confirm official URLs)
- Policies
- Copyright line

---

## 11. Shop / Catalog Page Requirements

### Layout
- Page title and short intro
- Category filter (sidebar on desktop; drawer/dropdown on mobile)
- Search input
- Sort dropdown
- Price range filter (based on demo prices)
- Product grid
- Pagination or “Load more”
- Empty-state UI
- Clear filters button

### Filters
- Category
- Price range
- Availability (only if demo data includes availability)
- Search by name and description

### Sorting
- Featured (default)
- Price low to high
- Price high to low
- Alphabetical A–Z

### Product card
- Image with consistent ratio
- Category label
- Product name
- Price formatted in BDT (e.g. `৳8,500`)
- Optional badge (based on data)
- Add to cart button
- View details link
- Wishlist action optional

---

## 12. Product Detail Page

### Required structure
- Breadcrumbs
- Product gallery
- Product name
- Category
- Price
- Availability status (demo only)
- Short description
- Quantity selector
- Add to Cart
- Buy Now (should route to cart/checkout demo, not process payment)
- Product description
- Specifications table
- Shipping note (generic/subject to confirmation)
- Related products

### Product specifications
Use realistic UI structure but only verified specs for actual products. Placeholder product examples should clearly show that the specs are demo/awaiting confirmation. Never misrepresent a telescope’s aperture, focal length, mount, eyepieces, or accessories.

---

## 13. Cart and Checkout Prototype

### Cart
- Cart items and thumbnails
- Quantity increment/decrement
- Remove item
- Subtotal
- Delivery estimate/charge placeholder (do not hardcode policy as fact)
- Coupon field (demo)
- Continue shopping
- Proceed to checkout
- Persist cart in `localStorage` for prototype

### Checkout demo
Fields:
- Customer name
- Phone number
- Email (optional)
- Delivery address
- District/city
- Notes (optional)
- Payment method selector (prototype options: Cash on Delivery, Mobile Financial Service, Bank/Card — actual availability needs confirmation)
- Order summary
- Submit demo order

### Prototype behavior
- Validate required fields
- Show a success screen/message with a **demo order number**
- Do not send customer data to a server
- Do not claim order is received by MicB Scientific
- Explain: “Prototype only — order is not submitted to the store.”
- Clear or retain cart according to user confirmation; for demo, clear only after a successful simulated order

---

## 14. Contact Page and Support

Display (subject to verification):
- Phone: 01517-811481
- Email: micbscientific@gmail.com
- WhatsApp: use this number only if confirmed as WhatsApp-enabled
- Address: show only after current location is verified
- Social media links

### Contact form
- Name
- Email or phone
- Subject
- Message
- Validation
- Demo submission message; no actual delivery without backend/email integration

### WhatsApp button
If the number is verified, use a WhatsApp click-to-chat link. For the prototype, a configurable number constant should be used; do not embed it in many places. If the number isn't verified as WhatsApp-enabled, show a phone/contact link instead.

---

## 15. About Page

Use the following draft, pending approval:

> MicB Scientific is a science-focused organization in Bangladesh dedicated to making science, astronomy, and scientific exploration more accessible to students, enthusiasts, educators, and curious minds.
>
> We offer a range of scientific instruments, telescopes, microscopes, astronomy accessories, educational science products, and science-related collectibles. Our goal is to encourage curiosity, exploration, and hands-on learning through science.
>
> Whether you are discovering astronomy for the first time, exploring the microscopic world, or searching for scientific equipment for educational purposes, MicB Scientific aims to help you explore the universe and discover the wonders of science.
>
> **Explore. Learn. Discover.**

This text is a draft and must be reviewed by the business. Avoid claims that aren't confirmed.

Suggested About sections:
- Brand introduction
- Mission and vision (draft, owner approval required)
- What customers can explore
- Educational/science focus
- CTA to Shop or Contact

---

## 16. Learning Center / Blog

### Topics to seed with demo content
1. Beginner’s Guide to Choosing a Telescope
2. What Can You See Through a Telescope?
3. Telescope Magnification Explained
4. Refractor vs Reflector Telescope
5. Beginner Guide to Astronomy Binoculars
6. How to Use a Microscope
7. Exploring the Moon: Observation Tips
8. Science Experiments for Students

Each article should include:
- Title
- Author (use generic “MicB Scientific Editorial” only as a placeholder)
- Date (clearly demo or omit)
- Hero image (approved/licensed)
- Reading time (can be calculated or placeholder)
- Article content
- Related products
- Related articles

Do not present demo articles as actual published MicB Scientific content.

---

## 17. FAQ — Initial Draft Questions

- Which telescope is suitable for beginners?
- Can I order online?
- Do you deliver outside Dhaka?
- What payment methods are available?
- How can I track my order?
- Are products available in stock?
- Can I order a product that is not listed?
- What is your return policy?
- Do products have warranties?
- Can I get help choosing a telescope or microscope?

Answers must be confirmed by the business. During prototype use neutral placeholders such as “Please contact the store for the latest information.”

---

## 18. Policies — Do Not Invent Final Rules

Create page templates for:
- Shipping and Delivery
- Returns and Refunds
- Pre-orders
- Warranty
- Privacy
- Terms and Conditions

A previously found public/older order-policy reference mentioned:
- Cash on Delivery
- Cash payment
- Bank payment
- Courier delivery
- Pre-orders
- A possible 60% advance and 40% on delivery for certain pre-orders

**This policy is old/unverified and must not be published as current without owner confirmation.** Use a “Policy details to be confirmed” state in the prototype.

---

## 19. Functional Requirements (Vanilla JavaScript)

Implement working frontend interactions:

- Mobile nav toggle and close
- Search overlay/input
- Search product catalog
- Category filter
- Price filter
- Sort
- Product details display/navigation
- Add to cart
- Cart count update
- Cart stored in localStorage
- Quantity update
- Remove from cart
- Cart subtotal calculation
- Wishlist toggle (optional, localStorage)
- Newsletter validation/demo success
- Contact form validation/demo success
- Checkout validation/demo order success
- FAQ accordion
- Product image gallery
- Toast notifications
- Scroll-to-top button (optional)
- Accessible keyboard behavior for menus/dialogs

No non-functional controls: every visible button/link should work, route somewhere valid, or be clearly disabled with explanation.

---

## 20. Accessibility and Responsive Requirements

- Semantic HTML
- Header, nav, main, section, footer
- Proper heading hierarchy
- Alt text for meaningful images
- Accessible labels for form controls
- Keyboard navigation
- Visible focus indicators
- Sufficient color contrast
- Reduced-motion support (`prefers-reduced-motion`)
- Responsive from 320px mobile to large desktop
- Avoid horizontal overflow
- Touch targets preferably around 44×44px
- Mobile menu accessible and closable
- Do not rely on color alone for statuses

---

## 21. SEO and Performance

For prototype:
- Unique page titles
- Meta descriptions
- Semantic headings
- Descriptive image alt text
- Clean URLs/filenames
- Open Graph placeholders
- Favicon placeholder
- Optimized/compressed images
- Lazy-load images below the fold
- Avoid unnecessary libraries
- Minimize layout shifts
- Keep CSS organized
- Keep JavaScript modular and readable

Production later:
- Add real sitemap.xml and robots.txt
- Structured data for products only with verified data
- Product schema, organization schema, article schema as appropriate
- Analytics only with privacy considerations/consent as required
- Secure backend, HTTPS, spam protection

---

## 22. Suggested Folder / File Structure

```text
micb-scientific/
├── index.html
├── shop.html
├── product.html
├── about.html
├── learn.html
├── article.html
├── contact.html
├── faq.html
├── cart.html
├── checkout.html
├── track-order.html
├── shipping.html
├── returns.html
├── preorder.html
├── warranty.html
├── privacy.html
├── terms.html
├── assets/
│   ├── logo/
│   ├── hero/
│   ├── categories/
│   ├── products/
│   ├── blog/
│   └── icons/
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── global.css
│   ├── components.css
│   ├── layout.css
│   ├── responsive.css
│   └── pages/
│       ├── home.css
│       ├── shop.css
│       ├── product.css
│       ├── cart.css
│       └── content.css
├── js/
│   ├── data/
│   │   └── products.js
│   ├── utils/
│   │   ├── format.js
│   │   └── storage.js
│   ├── components/
│   │   ├── header.js
│   │   ├── footer.js
│   │   ├── product-card.js
│   │   └── toast.js
│   ├── pages/
│   │   ├── home.js
│   │   ├── shop.js
│   │   ├── product.js
│   │   ├── cart.js
│   │   └── checkout.js
│   └── main.js
├── README.md
└── (optional) favicon files
```

If a simpler implementation is preferred, fewer files are acceptable, but keep reusable components and data separate from page logic.

---

## 23. Product Data Example (Prototype)

```js
const products = [
  {
    id: "P001",
    name: "Beginner Refractor Telescope",
    category: "Telescopes",
    price: 8500,
    image: "assets/images/products/p001-beginner-refractor-telescope.jpg",
    shortDescription: "A sample beginner telescope listing for the prototype.",
    description: "Demo product content. Confirm actual model, features, and availability.",
    specifications: {
      "Product type": "Beginner refractor (sample)",
      "Specifications": "To be confirmed"
    },
    availability: "demo",
    featured: true
  }
];
```

Format money using BDT:
```js
new Intl.NumberFormat("en-BD", {
  style: "currency",
  currency: "BDT",
  maximumFractionDigits: 0
}).format(price);
```

If the currency output appears as `BDT` instead of `৳`, use a consistent custom formatter such as `৳${price.toLocaleString("en-BD")}`.

---

## 24. Technical Notes and Constraints

- Use vanilla JS and avoid dependency-heavy libraries.
- Use localStorage for demo cart and wishlist only.
- Do not store sensitive payment data.
- No real payment gateway in this prototype.
- No backend order submission.
- Do not claim real inventory or delivery estimates.
- Do not use fake testimonials, fake reviews, fake ratings, or fabricated customer counts.
- Do not fabricate brand partnerships or manufacturer authorization.
- Do not copy protected content/images without permission.
- Use placeholders and clearly mark unverified details.
- Keep phone, email, social URLs, demo prices, and policy text in one configurable data file/constant to make updates easy.
- Ensure all page links work when served locally.
- If using `fetch()` for shared header/footer or product data, explain that local development should run through a local server (not necessarily `file://`) because browser fetch may be blocked.
- Prefer simple shared JS modules or duplicated static layout over fragile fetch-based injection if the prototype must run by double-clicking HTML files.

---

## 25. Development Phases

### Phase 1 — Brand/design foundation
- Inspect logo and approved assets
- Establish color variables, typography, spacing, button styles
- Create responsive header/footer
- Build homepage hero

### Phase 2 — Catalog
- Product data file
- Category cards
- Shop grid
- Search, filters, sorting
- Product detail view

### Phase 3 — Commerce interactions (demo)
- Cart
- Local storage
- Quantity/remove
- Checkout demo
- Success state

### Phase 4 — Content
- About page
- Learning Center
- Sample articles
- FAQ
- Contact page

### Phase 5 — Policies, QA
- Policy templates (marked pending confirmation)
- Responsive QA
- Accessibility QA
- Link checks
- Browser testing
- Replace placeholder assets/prices

### Phase 6 — Production readiness (future)
- Owner-confirmed content/assets
- Backend/CMS
- Real inventory
- Real payment gateway
- Shipping integrations
- Order notifications
- Security/privacy review
- Domain and hosting deployment

---

## 26. Quality Checklist

### Design
- [ ] Logo is approved/original
- [ ] Brand colors are verified or labeled temporary
- [ ] Desktop/tablet/mobile designs are polished
- [ ] Product images have consistent aspect ratio
- [ ] Typography and spacing are consistent
- [ ] No excessive animation

### Content
- [ ] Business name correct
- [ ] Phone/email confirmed
- [ ] WhatsApp confirmed
- [ ] Address confirmed
- [ ] About copy approved
- [ ] Categories reflect actual stock
- [ ] Products/models confirmed
- [ ] Real prices replace placeholder prices
- [ ] Specs confirmed
- [ ] Policies approved
- [ ] Social links verified

### Functionality
- [ ] Search works
- [ ] Filters work
- [ ] Sorting works
- [ ] Add to cart works
- [ ] Cart persists
- [ ] Quantity changes work
- [ ] Remove item works
- [ ] Checkout form validates
- [ ] Demo order is clearly labeled
- [ ] Mobile menu works
- [ ] Contact/newsletter forms clearly indicate demo status
- [ ] All navigation links work

### Accessibility/performance
- [ ] Keyboard navigation
- [ ] Focus states
- [ ] Alt text
- [ ] Contrast
- [ ] Reduced motion
- [ ] Responsive/no overflow
- [ ] Images optimized/lazy-loaded

---

## 27. Final Instructions for the AI Developer (Claude)

Build a complete, polished **frontend prototype** for MicB Scientific using HTML, CSS, and vanilla JavaScript.

1. Read this README thoroughly and use it as the single project brief.
2. Start by creating a coherent design system and responsive global header/footer.
3. Build a premium homepage with a clear science/astronomy identity, attractive hero, category tiles, featured products, beginner-learning content, brand introduction, and footer.
4. Build the Shop/catalog, product detail, About, Learning Center/blog, Contact, FAQ, Cart, and Checkout demo pages.
5. Use the provided sample product catalog and placeholder prices only as demo content. Make it easy to edit all product data in one place.
6. Do not invent official business facts, current inventory, prices, product specifications, warranty, delivery commitments, testimonials, ratings, or policies. Clearly mark unverified content.
7. Use logo and image files if supplied. If not, create temporary placeholders and explain exactly what assets are needed; do not imitate an official logo.
8. Make the frontend interactions functional: navigation, search, filters, sorting, product detail, cart, localStorage, quantity/remove, form validation, demo checkout, FAQ, and responsive menu.
9. Use accessible semantic HTML and responsive design. Ensure no broken links/buttons.
10. Do not implement actual payment, backend order processing, or customer-data transmission. Clearly communicate that checkout is a demo.
11. Keep code clean, organized, and easy for a beginner to maintain. Include comments where useful.
12. Provide all source files in a sensible project folder. If working in an environment that can create files, create the files directly; otherwise output code in clearly separated files and avoid omitting necessary code.
13. After implementation, provide a short run guide, list of files, what works, and what still requires verified business assets/information.

**Expected result:** A premium, mobile-friendly science e-commerce website prototype that feels like a real brand and is ready for later integration with a production CMS/e-commerce backend.
