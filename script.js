const { useEffect, useMemo, useState } = React;

const images = {
  hero: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2200&q=86",
  servicesPhoto: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1300&q=84",
  servicesEvent: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1300&q=84"
};

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" }
];

const services = [
  {
    title: "Photography & Videography",
    description: "Cinematic coverage for rituals, portraits, emotions, families, and complete wedding stories.",
    image: images.servicesPhoto,
    items: [
      { label: "Pre-Wedding", filter: "pre-wedding" },
      { label: "Haldi & Mehndi", filter: "haldi-mehndi" },
      { label: "Wedding Films", filter: "wedding-films" }
    ]
  },
  {
    title: "Event Management & Production",
    description: "Venue flow, decor coordination, stage planning, guest experience, and production control.",
    image: images.servicesEvent,
    items: [
      { label: "Wedding Events", filter: "wedding-films" },
      { label: "Corporate Events", filter: "corporate-events" }
    ]
  }
];

const portfolio = [
  {
    category: "pre-wedding",
    label: "Pre-Wedding",
    title: "Golden Hour Portraits",
    location: "Outdoor Couple Session",
    image: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=1000&q=84"
  },
  {
    category: "haldi-mehndi",
    label: "Haldi & Mehndi",
    title: "Color, Rituals & Family",
    location: "Day Celebration",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=84"
  },
  {
    category: "wedding-films",
    label: "Wedding Films",
    title: "Royal Wedding Story",
    location: "Ceremony + Reception",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=84"
  },
  {
    category: "corporate-events",
    label: "Corporate Events",
    title: "Launch Night Production",
    location: "Stage + Audience",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=84"
  }
];

const workSteps = [
  ["01", "Consultation", "Event date, venue, mood, guest flow, and coverage requirement are understood clearly."],
  ["02", "Creative Planning", "Shoot schedule, rituals, team allocation, decor flow, and must-have frames are mapped."],
  ["03", "Production", "Photography, videography, and event movement are handled with a calm on-ground team."],
  ["04", "Delivery", "Curated photos, edited films, and final event memories are delivered in a polished format."]
];

const gallery = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=84",
  "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=84",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=84",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=84",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=84",
  "https://images.unsplash.com/photo-1509610973147-232dfea52a97?auto=format&fit=crop&w=900&q=84"
];

function Icon({ path }) {
  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", "aria-hidden": "true" },
    React.createElement("path", { d: path })
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return React.createElement(
    "header",
    { className: `site-header ${scrolled ? "scrolled" : ""} ${open ? "open" : ""}` },
    React.createElement(
      "a",
      { className: "brand", href: "/#home", "aria-label": "KD Vision home", onClick: () => setOpen(false) },
      React.createElement("img", { src: "assets/kd-vision-logo-light.png", alt: "KD Vision Logo" })
    ),
    React.createElement(
      "nav",
      { className: `site-nav ${open ? "open" : ""}` },
      navItems.map((item) =>
        React.createElement(
          "a",
          { key: item.label, href: item.href, onClick: () => setOpen(false) },
          item.label
        )
      )
    ),
    React.createElement(
      "a",
      { className: "header-cta button button-primary", href: "/#contact", onClick: () => setOpen(false) },
      "Book Now"
    ),
    React.createElement(
      "button",
      {
        className: "nav-toggle",
        type: "button",
        "aria-label": "Open navigation",
        "aria-expanded": String(open),
        onClick: () => setOpen(!open)
      },
      React.createElement("span", null),
      React.createElement("span", null),
      React.createElement("span", null)
    )
  );
}

function CameraLens() {
  return React.createElement(
    "div",
    { className: "camera-lens-container" },
    React.createElement(
      "div",
      { className: "lens-barrel" },
      React.createElement("div", { className: "lens-ribbed-ring" }),
      React.createElement(
        "div",
        { className: "lens-scale" },
        React.createElement("span", null, "f/1.2"),
        React.createElement("span", null, "f/1.8"),
        React.createElement("span", { className: "active-fstop" }, "f/2.8"),
        React.createElement("span", null, "f/4.0"),
        React.createElement("span", null, "f/5.6")
      ),
      React.createElement(
        "div",
        { className: "lens-aperture-housing" },
        React.createElement(
          "svg",
          { viewBox: "0 0 100 100", className: "aperture-svg" },
          React.createElement("circle", { cx: "50", cy: "50", r: "46", className: "lens-outer-border" }),
          React.createElement("circle", { cx: "50", cy: "50", r: "34", className: "lens-inner-glass" }),
          React.createElement("path", { d: "M50 16 L64 36 L36 44 Z", className: "blade blade-1" }),
          React.createElement("path", { d: "M84 50 L64 64 L56 36 Z", className: "blade blade-2" }),
          React.createElement("path", { d: "M50 84 L36 64 L64 56 Z", className: "blade blade-3" }),
          React.createElement("path", { d: "M16 50 L36 36 L44 64 Z", className: "blade blade-4" }),
          React.createElement("circle", { cx: "50", cy: "50", r: "18", className: "aperture-opening" })
        ),
        React.createElement("div", { className: "lens-glare-effect" })
      ),
      React.createElement("div", { className: "lens-label" }, "KD VISION • 35mm CINEMA LENS")
    )
  );
}

function Hero() {
  return React.createElement(
    "section",
    { className: "hero", id: "home" },
    React.createElement(
      "div",
      { className: "parallax-container" },
      React.createElement("div", { className: "hero-backdrop parallax-bg", "data-speed": "0.35" })
    ),
    React.createElement(
      "div",
      { className: "hero-inner" },
      React.createElement(
        "div",
        { className: "hero-content reveal" },
        React.createElement("p", { className: "eyebrow" }, "✦ Premium Visual Direction & Films"),
        React.createElement("h1", null, "KD VISION"),
        React.createElement(
          "p",
          null,
          "Weaving magic into images with cinematic photography, soulful pre-wedding films, and professionally managed celebrations."
        ),
        React.createElement(
          "div",
          { className: "hero-actions" },
          React.createElement("a", { className: "button button-primary", href: "#portfolio" }, "Explore Portfolio"),
          React.createElement("a", { className: "button button-ghost", href: "#contact" }, "Book Consultation")
        )
      ),
      React.createElement(
        "div",
        { className: "hero-showcase reveal" },
        React.createElement(
          "div",
          { className: "showcase-card" },
          React.createElement("span", { className: "badge-live" }, "🔴 Live Direction & Capture"),
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=84",
            alt: "KD Vision Editorial Frame"
          }),
          React.createElement(CameraLens, null),
          React.createElement(
            "div",
            { className: "showcase-footer" },
            React.createElement("strong", null, "Royal Wedding Story"),
            React.createElement("span", null, "Cinematic 4K • Event Direction")
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "hero-strip" },
      ["Pre-Wedding", "Haldi & Mehndi", "Wedding Films", "Corporate Events", "Event Management"].map((item) =>
        React.createElement("span", { key: item }, item)
      )
    )
  );
}

function About() {
  return React.createElement(
    "section",
    { className: "section about-section", id: "about" },
    React.createElement(
      "div",
      { className: "about-inner" },
      React.createElement(
        "div",
        { className: "section-copy reveal" },
        React.createElement("p", { className: "eyebrow" }, "✦ About KD Vision"),
        React.createElement("h2", null, "Crafting timeless visual stories for your biggest milestones."),
        React.createElement(
          "p",
          null,
          "From intimate rituals to magnificent wedding galas, KD Vision combines artistic cinematography, high-end photography, and on-ground event direction so every moment feels effortless and looks breathtaking."
        ),
        React.createElement(
          "div",
          { className: "about-features" },
          ["Cinematic Storytelling", "On-Ground Direction", "Curated Albums"].map((feature) =>
            React.createElement("span", { key: feature, className: "feature-pill" }, `✓ ${feature}`)
          )
        )
      ),
      React.createElement(
        "div",
        { className: "metric-grid reveal" },
        [
          ["360°", "Complete Event Coverage"],
          ["4K", "Ultra HD Cinematic Films"],
          ["2-in-1", "Photography & Event Direction"],
          ["01", "Dedicated Creative Crew"]
        ].map(([value, label]) =>
          React.createElement(
            "div",
            { className: "metric-card", key: label },
            React.createElement("strong", null, value),
            React.createElement("span", null, label)
          )
        )
      )
    )
  );
}

function Services({ onPortfolioSelect }) {
  return React.createElement(
    "section",
    { className: "section services-section", id: "services" },
    React.createElement(
      "div",
      { className: "section-heading reveal" },
      React.createElement("p", { className: "eyebrow" }, "✦ Creative Services"),
      React.createElement("h2", null, "Everything needed to capture & manage your event beautifully.")
    ),
    React.createElement(
      "div",
      { className: "service-grid" },
      services.map((service) =>
        React.createElement(
          "article",
          { className: "service-card reveal", key: service.title },
          React.createElement(
            "div",
            { className: "parallax-container" },
            React.createElement("img", { src: service.image, alt: service.title, className: "parallax-bg", "data-speed": "0.2" })
          ),
          React.createElement(
            "div",
            { className: "service-content" },
            React.createElement("h3", null, service.title),
            React.createElement("p", null, service.description),
            React.createElement(
              "ul",
              null,
              service.items.map((item) =>
                React.createElement(
                  "li",
                  { key: item.label },
                  React.createElement(
                    "button",
                    {
                      type: "button",
                      onClick: () => onPortfolioSelect(item.filter)
                    },
                    item.label
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}

function WorkProcess() {
  return React.createElement(
    "section",
    { className: "section process-section", id: "process" },
    React.createElement(
      "div",
      { className: "section-heading reveal" },
      React.createElement("p", { className: "eyebrow" }, "Work Process"),
      React.createElement("h2", null, "A smooth flow from first call to final delivery.")
    ),
    React.createElement(
      "div",
      { className: "process-track reveal" },
      workSteps.map(([number, title, text]) =>
        React.createElement(
          "article",
          { className: "process-card", key: number },
          React.createElement("span", null, number),
          React.createElement("h3", null, title),
          React.createElement("p", null, text)
        )
      )
    )
  );
}

function Portfolio({ filter, onFilterChange }) {
  const filters = ["all", "pre-wedding", "haldi-mehndi", "wedding-films", "corporate-events"];
  const labels = {
    all: "All",
    "pre-wedding": "Pre-Wedding",
    "haldi-mehndi": "Haldi & Mehndi",
    "wedding-films": "Wedding Films",
    "corporate-events": "Corporate Events"
  };

  const filteredPortfolio = useMemo(() => {
    if (filter === "all") {
      const categoriesSeen = new Set();
      return portfolio.filter((item) => {
        if (!categoriesSeen.has(item.category)) {
          categoriesSeen.add(item.category);
          return true;
        }
        return false;
      });
    }
    return portfolio.filter((item) => item.category === filter);
  }, [filter]);

  return React.createElement(
    "section",
    { className: "section portfolio-section", id: "portfolio" },
    React.createElement(
      "div",
      { className: "section-heading reveal" },
      React.createElement("p", { className: "eyebrow" }, "✦ Master Portfolio"),
      React.createElement("h2", null, "Curated frames across pre-weddings, rituals, films, corporate summits & stage production.")
    ),
    React.createElement(
      "div",
      { className: "filter-bar reveal", role: "tablist", "aria-label": "Portfolio filters" },
      filters.map((item) =>
        React.createElement(
          "button",
          {
            className: `filter-button ${filter === item ? "active" : ""}`,
            type: "button",
            role: "tab",
            "aria-selected": String(filter === item),
            onClick: () => onFilterChange(item),
            key: item
          },
          labels[item]
        )
      )
    ),
    React.createElement(
      "div",
      { className: "portfolio-grid" },
      filteredPortfolio.map((item) =>
        React.createElement(
          "a",
          {
            className: "portfolio-card reveal",
            key: `${item.title}-${item.category}`,
            href: `/#category/${item.category}`
          },
          React.createElement("img", { src: item.image, alt: item.title }),
          React.createElement(
            "div",
            null,
            React.createElement("span", null, item.label),
            React.createElement("h3", null, item.title),
            React.createElement("p", null, item.location)
          )
        )
      )
    )
  );
}

function GalleryPreview() {
  return React.createElement(
    "section",
    { className: "section gallery-preview", id: "gallery" },
    React.createElement(
      "div",
      { className: "gallery-preview-inner reveal" },
      React.createElement(
        "div",
        { className: "parallax-container" },
        React.createElement("img", {
          src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=84",
          alt: "KD Vision Gallery Preview",
          className: "parallax-bg",
          "data-speed": "0.3"
        })
      ),
      React.createElement("p", { className: "eyebrow" }, "✦ Full Photo Gallery"),
      React.createElement("h2", null, "Open the full gallery page for a cinematic photo scroll."),
      React.createElement("a", { className: "button button-dark", href: "/gallery" }, "Open Gallery →")
    )
  );
}

function GalleryPage() {
  return React.createElement(
    "section",
    { className: "gallery-page", id: "gallery-page" },
    React.createElement(
      "div",
      { className: "gallery-page-hero reveal" },
      React.createElement(
        "div",
        { className: "parallax-container" },
        React.createElement("img", {
          src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1800&q=84",
          alt: "KD Vision Gallery Hero",
          className: "parallax-bg",
          "data-speed": "0.4"
        })
      ),
      React.createElement("p", { className: "eyebrow" }, "✦ Full Gallery"),
      React.createElement("h1", null, "KD Vision Gallery"),
      React.createElement("p", null, "Scroll slowly. Every frame gets its own full-screen moment.")
    ),
    React.createElement(
      "div",
      { className: "gallery-scroll" },
      gallery.map((image, index) =>
        React.createElement(
          "figure",
          { className: "gallery-frame reveal", key: image },
          React.createElement("img", {
            src: image,
            alt: `KD Vision gallery moment ${index + 1}`
          }),
          React.createElement("figcaption", null, `Frame ${String(index + 1).padStart(2, "0")}`)
        )
      )
    )
  );
}

function Contact() {
  const contactCards = [
    {
      label: "WhatsApp",
      value: "Chat instantly",
      href: "https://wa.me/917479539447",
      icon: "M20.5 3.5A10 10 0 0 0 3.2 14.1L2 22l8.1-1.1A10 10 0 1 0 20.5 3.5Zm-8.3 14.1c-1.7 0-3.3-.6-4.6-1.8-1.3-1.2-2-2.8-2-4.5 0-.4.3-.8.7-.8h1.5c.3 0 .6.2.7.5l.5 1.2c.1.3.1.6-.1.8l-.5.6c.6 1.1 1.5 1.9 2.6 2.4l.6-.6c.2-.2.5-.3.8-.2l1.3.4c.3.1.5.4.5.7v1.4c0 .4-.3.7-.7.7h-1.3Z"
    },
    {
      label: "Call",
      value: "+91 747 953 9447",
      href: "tel:+917479539447",
      icon: "M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.6 21.5 2.5 13.4 2.5 3.4c0-.7.5-1.2 1.2-1.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.7.6 4 .1.4 0 .9-.3 1.2l-2.1 2.2Z"
    },
    {
      label: "Instagram",
      value: "@kd___vision___",
      href: "https://www.instagram.com/kd___vision___/",
      icon: "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm4.2 5.1A4.9 4.9 0 1 0 12 17a4.9 4.9 0 0 0 0-9.9Zm6-1.1a1.1 1.1 0 1 0 0 2.2A1.1 1.1 0 0 0 18 6Zm-6 3.1A2.9 2.9 0 1 1 12 15a2.9 2.9 0 0 1 0-5.8Z"
    }
  ];

  return React.createElement(
    "section",
    { className: "section contact-section", id: "contact" },
    React.createElement(
      "div",
      { className: "parallax-container" },
      React.createElement("img", {
        src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1600&q=82",
        alt: "KD Vision Contact Backdrop",
        className: "parallax-bg",
        "data-speed": "0.25"
      })
    ),
    React.createElement(
      "div",
      { className: "contact-inner" },
      React.createElement(
        "div",
        { className: "section-copy reveal" },
        React.createElement("p", { className: "eyebrow" }, "✦ Contact Us"),
        React.createElement("h2", null, "Ready to plan your shoot or complete event?"),
        React.createElement(
          "p",
          null,
          "Send your event date, venue, celebration type, and coverage needs. KD Vision will craft a custom package tailored for photography, films, and event management."
        )
      ),
      React.createElement(
        "div",
        { className: "contact-actions reveal" },
        contactCards.map((card) =>
          React.createElement(
            "a",
            { className: "contact-card", href: card.href, target: card.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer", key: card.label },
            React.createElement("span", { className: "contact-icon" }, React.createElement(Icon, { path: card.icon })),
            React.createElement("span", null, card.label),
            React.createElement("strong", null, card.value)
          )
        )
      )
    )
  );
}

function CustomCursor() {
  return null;
}

const categoryData = {
  "pre-wedding": {
    title: "Pre-Wedding Shoot Gallery",
    tagline: "Romantic Tales, Sunset Landscapes & Cinematic Memories",
    cover: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=84",
    photos: [
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=84", title: "Sunset Romance in Udaipur", date: "Udaipur • Pre-Wedding" },
      { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=84", title: "Golden Hour Embrace", date: "Jaipur • Pre-Wedding" },
      { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=84", title: "Lakeside Whispers", date: "Kashmir • Pre-Wedding" },
      { url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=84", title: "Royal Fort Portraits", date: "Jodhpur • Pre-Wedding" },
      { url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=84", title: "Dusk Silhouette", date: "Goa Beach • Pre-Wedding" },
      { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=84", title: "Vintage Car Couple Story", date: "Delhi • Pre-Wedding" }
    ]
  },
  "haldi-mehndi": {
    title: "Haldi & Mehndi Festivities",
    tagline: "Vibrant Colors, Pure Joy, Marigold Flowers & Henna Artistry",
    cover: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1800&q=84",
    photos: [
      { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=84", title: "Marigold Haldi Splashes", date: "Haldi Rituals" },
      { url: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=84", title: "Detailed Henna & Bangle Shots", date: "Mehndi Night" },
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=84", title: "Sangeet & Haldi Dancing", date: "Celebration" },
      { url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=84", title: "Floral Jewellery Portraits", date: "Bride Haldi" },
      { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=84", title: "Yellow Canopy Decor", date: "Haldi Setup" }
    ]
  },
  "wedding-films": {
    title: "Royal Wedding Films & Cinema",
    tagline: "Grand Ceremonies, Sacred Rituals & Emotional Storytelling",
    cover: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=84",
    photos: [
      { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=84", title: "Royal Pheras Under the Stars", date: "Palace Wedding" },
      { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=84", title: "Bridal Varmala Ceremony", date: "Varmala Stage" },
      { url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=84", title: "Royal Baraat Procession", date: "Baraat Entry" },
      { url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=84", title: "Bidaai Emotional Moments", date: "Rituals" },
      { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=84", title: "Grand Reception Gala", date: "Reception Film" }
    ]
  },
  "corporate-events": {
    title: "Corporate Summits & Brand Events",
    tagline: "Executive Keynotes, Brand Launches & Corporate Media Coverage",
    cover: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=84",
    photos: [
      { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=84", title: "Global Leadership Keynote Summit", date: "Tech Convention" },
      { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=84", title: "Annual Corporate Awards Gala", date: "Awards Night" },
      { url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=84", title: "Flagship Product Reveal", date: "Brand Launch" },
      { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=84", title: "Executive Networking Evening", date: "Exhibition" }
    ]
  }
};

function CategoryPage({ categoryKey }) {
  const data = categoryData[categoryKey] || categoryData["pre-wedding"];
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("posts");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [categoryKey]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % data.photos.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev - 1 + data.photos.length) % data.photos.length);
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, data.photos.length]);

  const activePhoto = selectedIndex !== null ? data.photos[selectedIndex] : null;

  return React.createElement(
    "main",
    { className: "category-page insta-page" },
    React.createElement(
      "div",
      { className: "insta-container" },
      React.createElement(
        "div",
        { className: "insta-top-nav" },
        React.createElement(
          "a",
          { href: "/#home", className: "insta-back-arrow" },
          "←"
        ),
        React.createElement("h1", { className: "insta-nav-title" }, "kd___vision___")
      ),
      React.createElement(
        "div",
        { className: "insta-profile-header" },
        React.createElement(
          "div",
          { className: "insta-avatar-wrap" },
          React.createElement("img", { src: "assets/kd-vision-logo.png", alt: "KD Vision Profile Logo", className: "insta-avatar" })
        ),
        React.createElement(
          "div",
          { className: "insta-profile-right" },
          React.createElement(
            "div",
            { className: "insta-handle-row" },
            React.createElement("h2", null, "kd___vision___")
          ),
          React.createElement("h3", { className: "insta-fullname" }, "KD__VISION__"),
          React.createElement(
            "div",
            { className: "insta-stats-row" },
            React.createElement(
              "div",
              { className: "insta-stat-col" },
              React.createElement("strong", null, "65"),
              React.createElement("span", null, "posts")
            ),
            React.createElement(
              "div",
              { className: "insta-stat-col" },
              React.createElement("strong", null, "749"),
              React.createElement("span", null, "followers")
            ),
            React.createElement(
              "div",
              { className: "insta-stat-col" },
              React.createElement("strong", null, "44"),
              React.createElement("span", null, "following")
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "insta-bio" },
        React.createElement("p", { className: "insta-category-tag" }, "Wedding Planning Service"),
        React.createElement("p", null, `"Where artistry meets aperture"`),
        React.createElement("p", null, "yOuR viSual storYteller"),
        React.createElement("p", null, "Freezing moments & crafting stories of your marriage!"),
        React.createElement(
          "p",
          { className: "insta-manageby" },
          "Manageby- ",
          React.createElement(
            "a",
            {
              href: "https://www.instagram.com/mr_dutta______/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "insta-mention",
              onClick: (e) => {
                e.preventDefault();
                window.open("https://www.instagram.com/mr_dutta______/", "_blank");
              }
            },
            "@mr_dutta______"
          ),
          " ",
          React.createElement(
            "a",
            {
              href: "https://www.instagram.com/keshaa_wd/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "insta-mention",
              onClick: (e) => {
                e.preventDefault();
                window.open("https://www.instagram.com/keshaa_wd/", "_blank");
              }
            },
            "@keshaa_wd"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "insta-action-buttons" },
        React.createElement("a", { className: "insta-btn insta-btn-primary", href: "https://www.instagram.com/kd___vision___/", target: "_blank", rel: "noreferrer" }, "Follow"),
        React.createElement("a", { className: "insta-btn insta-btn-secondary", href: "/#contact" }, "Book Now / Inquiry")
      ),
      React.createElement(
        "div",
        { className: "insta-tabs" },
        React.createElement("button", { className: `insta-tab ${activeTab === "posts" ? "active" : ""}`, onClick: () => setActiveTab("posts") }, "📷 POSTS"),
        React.createElement("button", { className: `insta-tab ${activeTab === "reels" ? "active" : ""}`, onClick: () => setActiveTab("reels") }, "🎬 REELS"),
        React.createElement("button", { className: `insta-tab ${activeTab === "tagged" ? "active" : ""}`, onClick: () => setActiveTab("tagged") }, "🏷️ TAGGED")
      ),
      React.createElement(
        "div",
        { className: "insta-grid" },
        data.photos.map((photo, index) =>
          React.createElement(
            "div",
            {
              key: index,
              className: "insta-grid-item reveal visible",
              onClick: () => setSelectedIndex(index)
            },
            React.createElement("img", { src: photo.url, alt: photo.title, loading: "lazy" }),
            React.createElement(
              "div",
              { className: "insta-hover-overlay" },
              React.createElement("span", { className: "insta-stat" }, `❤️ ${120 + index * 48}`),
              React.createElement("span", { className: "insta-stat" }, `💬 ${18 + index * 5}`)
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "category-cta-box" },
        React.createElement("h3", null, `Planning a ${data.title}?`),
        React.createElement("p", null, "Book KD Vision's specialized photography, film direction, and event management team."),
        React.createElement("a", { className: "button button-primary", href: "/#contact" }, "Book Consultation Now")
      )
    ),
    activePhoto && React.createElement(
      "div",
      { className: "lightbox-modal insta-modal", onClick: () => setSelectedIndex(null) },
      React.createElement(
        "button",
        {
          className: "insta-slide-nav prev-slide",
          onClick: (e) => {
            e.stopPropagation();
            setSelectedIndex((prev) => (prev - 1 + data.photos.length) % data.photos.length);
          }
        },
        "❮"
      ),
      React.createElement(
        "div",
        { className: "insta-post-card", onClick: (e) => e.stopPropagation() },
        React.createElement("button", { className: "lightbox-close", onClick: () => setSelectedIndex(null) }, "✕"),
        React.createElement(
          "div",
          { className: "insta-post-media" },
          React.createElement("img", { src: activePhoto.url, alt: activePhoto.title })
        ),
        React.createElement(
          "div",
          { className: "insta-post-sidebar" },
          React.createElement(
            "div",
            { className: "insta-post-header" },
            React.createElement("img", { src: "assets/kd-vision-logo.png", alt: "Avatar", className: "insta-mini-avatar" }),
            React.createElement(
              "div",
              null,
              React.createElement("strong", null, "kd___vision___"),
              React.createElement("span", null, `${activePhoto.date} • Photo ${selectedIndex + 1} of ${data.photos.length}`)
            )
          ),
          React.createElement(
            "div",
            { className: "insta-post-body" },
            React.createElement("p", null, React.createElement("strong", null, "kd___vision___"), " ", activePhoto.title),
            React.createElement("p", { className: "insta-hashtags" }, "#KDVision #PreWedding #WeddingFilms #EventDirection #IndiaPhotographers")
          ),
          React.createElement(
            "div",
            { className: "insta-post-footer" },
            React.createElement("div", { className: "insta-actions" }, "❤️ 💬 ✈️ 🔖"),
            React.createElement("strong", null, `${1400 + selectedIndex * 85} likes`),
            React.createElement("span", { className: "insta-time" }, "2 DAYS AGO")
          )
        )
      ),
      React.createElement(
        "button",
        {
          className: "insta-slide-nav next-slide",
          onClick: (e) => {
            e.stopPropagation();
            setSelectedIndex((prev) => (prev + 1) % data.photos.length);
          }
        },
        "❯"
      )
    )
  );
}

function Hero() {
  return React.createElement(
    "section",
    { className: "hero", id: "home" },
    React.createElement(
      "div",
      { className: "parallax-container" },
      React.createElement("div", { className: "hero-backdrop parallax-bg", "data-speed": "0.35" })
    ),
    React.createElement(
      "div",
      { className: "hero-inner" },
      React.createElement(
        "div",
        { className: "hero-content reveal" },
        React.createElement("p", { className: "eyebrow" }, "✦ Premium Visual Direction & Films"),
        React.createElement("h1", null, "KD VISION"),
        React.createElement(
          "p",
          null,
          "Weaving magic into images with cinematic photography, soulful pre-wedding films, and professionally managed celebrations."
        ),
        React.createElement(
          "div",
          { className: "hero-actions" },
          React.createElement("a", { className: "button button-primary", href: "#portfolio" }, "Explore Portfolio"),
          React.createElement("a", { className: "button button-ghost", href: "#contact" }, "Book Consultation")
        )
      ),
      React.createElement(
        "div",
        { className: "hero-showcase reveal" },
        React.createElement(
          "div",
          { className: "showcase-card" },
          React.createElement("span", { className: "badge-live" }, "🔴 Live Direction & Capture"),
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=84",
            alt: "KD Vision Editorial Frame"
          }),
          React.createElement(CameraLens, null),
          React.createElement(
            "div",
            { className: "showcase-footer" },
            React.createElement("strong", null, "Royal Wedding Story"),
            React.createElement("span", null, "Cinematic 4K • Event Direction")
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "hero-strip" },
      [
        { label: "Pre-Wedding", key: "pre-wedding" },
        { label: "Haldi & Mehndi", key: "haldi-mehndi" },
        { label: "Wedding Films", key: "wedding-films" },
        { label: "Corporate Events", key: "corporate-events" },
        { label: "Event Management", key: "event-management" }
      ].map((item) =>
        React.createElement(
          "a",
          { key: item.key, href: `/#category/${item.key}` },
          React.createElement("span", null, item.label)
        )
      )
    )
  );
}

function Services({ onPortfolioSelect }) {
  return React.createElement(
    "section",
    { className: "section services-section", id: "services" },
    React.createElement(
      "div",
      { className: "section-heading reveal" },
      React.createElement("p", { className: "eyebrow" }, "✦ Master Services"),
      React.createElement("h2", null, "Photography, Videography & Complete Event Management"),
      React.createElement(
        "div",
        { className: "section-copy" },
        React.createElement(
          "p",
          null,
          "From intimate rituals to mega corporate galas, KD Vision delivers creative visual direction, high-definition camera teams, and flawless event execution."
        )
      )
    ),
    React.createElement(
      "div",
      { className: "service-grid" },
      services.map((service, index) =>
        React.createElement(
          "article",
          { key: service.title, className: "service-card reveal" },
          React.createElement("div", { className: "parallax-container" },
            React.createElement("img", {
              src: service.image,
              alt: service.title,
              className: "parallax-bg",
              "data-speed": "0.2"
            })
          ),
          React.createElement(
            "div",
            { className: "service-content" },
            React.createElement("h3", null, service.title),
            React.createElement("p", null, service.description),
            React.createElement(
              "ul",
              null,
              service.items.map((item) =>
                React.createElement(
                  "li",
                  { key: item.label },
                  React.createElement(
                    "button",
                    {
                      type: "button",
                      onClick: () => onPortfolioSelect(item.filter)
                    },
                    `${item.label} →`
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}

function Footer() {
  return React.createElement(
    "footer",
    { className: "site-footer" },
    React.createElement(
      "div",
      { className: "footer-brand-wrap" },
      React.createElement("img", { src: "assets/kd-vision-logo-light.png", alt: "KD Vision Logo", className: "footer-logo" }),
      React.createElement("p", null, `Copyright ${new Date().getFullYear()} KD Vision. Photography, videography, and event management.`)
    ),
    React.createElement(
      "div",
      { className: "creator-credit-badge" },
      React.createElement("span", { className: "badge-sparkle" }, "✦"),
      React.createElement("span", null, " Designed & Developed by "),
      React.createElement(
        "a",
        {
          href: "https://navin-portfolio-five.vercel.app/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "creator-link"
        },
        "Navin Kumar"
      ),
      React.createElement("span", { className: "badge-bolt" }, " ⚡")
    ),
    React.createElement("a", { href: "/#home", className: "back-top-link" }, "Back to top ↑")
  );
}

function App() {
  const [route, setRoute] = useState("home");
  const [categoryKey, setCategoryKey] = useState("pre-wedding");
  const [portfolioFilter, setPortfolioFilter] = useState("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  });

  // Interactive 3D Card Tilt Engine
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const cards = document.querySelectorAll(
      ".service-card, .portfolio-card, .process-card, .metric-card, .contact-card, .showcase-card, .insta-grid-item"
    );

    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles max +/- 12deg
      const rotateX = (((y - centerY) / centerY) * -12).toFixed(2);
      const rotateY = (((x - centerX) / centerX) * 12).toFixed(2);

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(14px) scale3d(1.02, 1.02, 1.02)`;

      // Specular glare light reflection gradient
      const glare = card.querySelector(".tilt-glare");
      if (glare) {
        const percentX = ((x / rect.width) * 100).toFixed(1);
        const percentY = ((y / rect.height) * 100).toFixed(1);
        glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 65%)`;
        glare.style.opacity = "1";
      }
    };

    const handleMouseLeave = (e) => {
      const card = e.currentTarget;
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)";
      const glare = card.querySelector(".tilt-glare");
      if (glare) {
        glare.style.opacity = "0";
      }
    };

    cards.forEach((card) => {
      card.classList.add("tilt-3d");
      if (!card.querySelector(".tilt-glare")) {
        const glare = document.createElement("div");
        glare.className = "tilt-glare";
        card.appendChild(glare);
      }
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  });

  // High-Performance Lerped Inertial Parallax Engine
  useEffect(() => {
    let animId;
    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;

    const elements = document.querySelectorAll(".parallax-bg, [data-speed]");

    const render = () => {
      const isMobile = window.innerWidth <= 768;
      currentScrollY += (targetScrollY - currentScrollY) * 0.12;
      const vh = window.innerHeight;

      elements.forEach((el) => {
        if (isMobile) {
          el.style.transform = "none";
          return;
        }
        const speed = parseFloat(el.getAttribute("data-speed") || "0.35");
        const parent = el.closest(".parallax-container") || el.parentElement;
        if (!parent) return;

        const rect = parent.getBoundingClientRect();
        if (rect.top < vh + 100 && rect.bottom > -100) {
          const centerY = rect.top + rect.height / 2;
          const distFromCenter = centerY - vh / 2;
          const parallaxOffset = (distFromCenter * speed * -0.38).toFixed(2);
          el.style.transform = `translate3d(0, ${parallaxOffset}px, 0) scale(1.12)`;
        }
      });

      animId = requestAnimationFrame(render);
    };

    const onScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    render();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  useEffect(() => {
    const syncRoute = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;

      if (path === "/gallery" || hash === "#gallery") {
        setRoute("gallery");
      } else if (hash.startsWith("#category/")) {
        const key = hash.replace("#category/", "");
        setCategoryKey(key);
        setRoute("category");
      } else {
        setRoute("home");
      }
    };

    window.addEventListener("hashchange", syncRoute);
    window.addEventListener("popstate", syncRoute);
    syncRoute();
    return () => {
      window.removeEventListener("hashchange", syncRoute);
      window.removeEventListener("popstate", syncRoute);
    };
  }, []);

  useEffect(() => {
    if (route !== "home" || !window.location.hash) {
      return;
    }

    const timer = window.setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);

    return () => window.clearTimeout(timer);
  }, [route, window.location.hash]);

  const handlePortfolioSelect = (filter) => {
    setRoute("home");
    setPortfolioFilter(filter);
    window.history.replaceState(null, "", "/#portfolio");
    window.setTimeout(() => {
      document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const homePage = React.createElement(
    "main",
    null,
    React.createElement(Hero, null),
    React.createElement(About, null),
    React.createElement(Services, { onPortfolioSelect: handlePortfolioSelect }),
    React.createElement(WorkProcess, null),
    React.createElement(Portfolio, { filter: portfolioFilter, onFilterChange: setPortfolioFilter }),
    React.createElement(GalleryPreview, null),
    React.createElement(Contact, null)
  );

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(CustomCursor, null),
    React.createElement(Header, null),
    route === "gallery"
      ? React.createElement("main", null, React.createElement(GalleryPage, null))
      : route === "category"
      ? React.createElement(CategoryPage, { categoryKey })
      : homePage,
    React.createElement(Footer, null)
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
