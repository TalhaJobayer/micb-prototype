/* ===== Demo product catalog — ALL prices, names and specs are PLACEHOLDERS =====
   Edit products here only. `group` must match a category slug in config.js.
   Images: exact filenames from the image pack (AI-generated demo images). */
(function () {
  const IMG = "assets/images/products/";
  const SPEC_TBA = "To be confirmed";
  function p(id, name, category, group, price, file, short, extra) {
    return Object.assign({
      id, name, category, group, price, image: IMG + file,
      shortDescription: short,
      description: "Demo listing. The model, features, included accessories and availability must be confirmed by MicB Scientific before this product goes live.",
      specifications: { "Product type": short, "Model / specifications": SPEC_TBA, "Warranty": SPEC_TBA },
      availability: "demo", featured: false
    }, extra || {});
  }
  window.MICB_PRODUCTS = [
    p("P001", "Beginner Refractor Telescope", "Telescopes", "telescopes", 8500,  "p001-beginner-refractor-telescope.jpg", "Beginner refractor-style telescope", { featured: true, badge: "Beginner-friendly" }),
    p("P002", "70mm Astronomical Telescope",  "Telescopes", "telescopes", 12500, "p002-70mm-astronomical-telescope.jpg",  "Refractor-style telescope on tripod", { featured: true }),
    // NOTE: demo image for P003/P005 is nearly identical (Dobsonian-style); P004 image looks like a refractor. Replace with real photos.
    p("P003", "114mm Reflector Telescope",    "Telescopes", "telescopes", 22000, "p003-114mm-reflector-telescope.jpg",    "Reflector-style telescope", { featured: true }),
    p("P004", "130mm Reflector Telescope",    "Telescopes", "telescopes", 45000, "p004-130mm-reflector-telescope.jpg",    "Telescope listing (sample)"),
    p("P005", "150mm Dobsonian Telescope",    "Telescopes", "telescopes", 65000, "p005-150mm-dobsonian-telescope.jpg",    "Dobsonian-style telescope"),
    p("P006", "Astronomy Binocular 10×50",    "Binoculars", "binoculars", 8000,  "p006-astronomy-binocular-10x50.jpg",    "Astronomy binoculars", { featured: true }),
    p("P007", "Beginner Microscope",          "Microscopes", "microscopes", 5500, "p007-beginner-microscope.jpg",          "Beginner / educational microscope", { featured: true, badge: "Beginner-friendly" }),
    p("P008", "Digital Microscope",           "Microscopes", "microscopes", 9500, "p008-digital-microscope.jpg",           "Handheld digital microscope with stand"),
    p("P009", "Telescope Eyepiece Set",       "Accessories", "accessories", 6500, "p009-telescope-eyepiece-set.jpg",       "Set of telescope eyepieces", { featured: true }),
    p("P010", "2× Barlow Lens",               "Accessories", "accessories", 2000, "p010-2x-barlow-lens.jpg",               "Barlow lens"),
    p("P011", "Moon Filter",                  "Accessories", "accessories", 1500, "p011-moon-filter.jpg",                  "Eyepiece filter"),
    p("P012", "Telescope Tripod",             "Accessories", "accessories", 4000, "p012-telescope-tripod.jpg",             "Adjustable tripod"),
    p("P013", "Science Experiment Kit",       "Science Kits", "kits", 1800,       "p013-science-experiment-kit.jpg",       "Experiment kit for learners", { featured: true }),
    p("P014", "Space Shuttle Building Puzzle","Space Gifts / Puzzles", "collectibles", 3500, "p014-space-shuttle-building-puzzle.jpg", "Space-themed 3D puzzle", { featured: true }),
    p("P015", "Meteorite Specimen (sample listing)", "Collectibles", "collectibles", 2500, "p015-meteorite-specimen.jpg", "Specimen on display stand — authenticity to be confirmed")
  ];
})();
