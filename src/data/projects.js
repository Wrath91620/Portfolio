/**
 * CUSTOMIZE: Replace with your real case studies. Add/remove objects as needed.
 */
const assetBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (assetPath) => `${assetBase}${assetPath}`;

export const projects = [
  {
    id: "tgmena",
    name: "TGMENA",
    tagline: "Digital ecosystem delivery across product pages, growth surfaces, and operational workflows.",
    context:
      "At TGMENA, I led and shipped web products and growth-focused surfaces where content quality, performance, and structured delivery directly impacted visibility and business momentum.",
    problem:
      "The challenge was balancing speed and quality across multiple workstreams while keeping architecture, SEO discipline, and production stability aligned.",
    solution:
      "Established clear implementation patterns, shipped critical frontend and backend tasks, and aligned technical SEO, performance improvements, and execution standards across releases.",
    stack: ["Next.js", "Node.js", "MySQL", "Technical SEO", "Performance optimization"],
    outcome:
      "Improved delivery consistency and search-performance outcomes with production-ready launches supported by clearer engineering standards.",
    proofPoints: [
      "Multiple production releases shipped with cross-team coordination",
      "Technical SEO and performance improvements integrated into delivery flow",
    ],
    imageUrl: withBase("/projects/tgmena.png"),
    screenshots: [withBase("/projects/tgmena.png")],
    localLogoUrl: withBase("/logos/TG.png"),
    logoUrl: "https://logo.clearbit.com/tgmena.com",
    liveUrl: "https://tgmena.com",
    repoUrl: "",
  },
  {
    id: "cham-clinic",
    name: "Cham Clinic",
    tagline: "Bilingual healthcare platform for specialty and corporate medical services.",
    context:
      "Cham Clinic is a bilingual healthcare website for a specialty medical center in Damascus offering outpatient care, emergency services, diagnostic imaging, laboratory testing, telemedicine, and corporate medical services.",
    problem:
      "The platform needed to present complex medical services, physician profiles, and corporate health programs in a clear, trust focused structure for both Arabic and English audiences.",
    solution:
      "Designed and implemented a bilingual medical website focused on service discovery, physician visibility, and patient communication, with dedicated sections for specialty clinics, diagnostics, telemedicine, and workplace health offerings.",
    stack: ["WordPress", "UI/UX", "Bilingual UX", "Healthcare content architecture", "Responsive UI"],
    outcome: "Delivered a professional, trust first medical web presence with strong service clarity and communication flow.",
    proofPoints: ["Live bilingual production website", "Service, doctor, and corporate program IA shipped end to end"],
    imageUrl: withBase("/projects/cham-clinic.jpg"),
    screenshots: [
      withBase("/projects/cham-clinic.jpg"),
      "https://s.wordpress.com/mshots/v1/https://cham.clinic/#services?w=1600",
      "https://s.wordpress.com/mshots/v1/https://cham.clinic/#contact?w=1600",
    ],
    localLogoUrl: withBase("/logos/cham-clinic.png"),
    logoTreatment: "darkChip",
    logoUrl: "https://logo.clearbit.com/cham.clinic",
    liveUrl: "https://cham.clinic",
    repoUrl: "",
  },
  {
    id: "oppolia-ksa",
    name: "Oppolia KSA",
    tagline: "Saudi focused home interiors platform with premium catalog presentation.",
    context:
      "Oppolia KSA is a Saudi facing product and brand website focused on home solutions including kitchens, wardrobes, bedroom furniture, bathroom units, internal doors, and complete home packages.",
    problem:
      "The website needed to balance broad product exploration with premium brand positioning, while keeping navigation and lead generation touchpoints clear.",
    solution:
      "Built a product focused home interiors website with structured category browsing, strong branding, quality and value messaging, and clear conversion paths for enquiries.",
    stack: ["WordPress", "UI/UX", "Technical SEO", "Catalog UX", "Brand first UI", "Lead generation structure"],
    outcome: "Shipped a polished Saudi market web experience that supports both discovery and sales conversations.",
    proofPoints: ["Live production catalog website", "Category architecture and enquiry paths implemented for conversion"],
    imageUrl: withBase("/projects/oppolia-ksa.png"),
    screenshots: [
      withBase("/projects/oppolia-ksa.png"),
      "https://s.wordpress.com/mshots/v1/https://oppoliaksa.com/product-category/%D8%A7%D9%84%D9%85%D8%B7%D8%A7%D8%A8%D8%AE/?w=1600",
      "https://s.wordpress.com/mshots/v1/https://oppoliaksa.com/product-category/%D8%AE%D8%B2%D8%A7%D8%A6%D9%86/?w=1600",
    ],
    localLogoUrl: withBase("/logos/oppolia-ksa.png"),
    logoUrl: "https://logo.clearbit.com/oppoliaksa.com",
    liveUrl: "https://oppoliaksa.com",
    repoUrl: "",
  },
  {
    id: "oppolia-online",
    name: "Oppolia Online",
    tagline: "Service led kitchen journey from booking to installation.",
    context:
      "Oppolia Online is a service led platform built around ordering a kitchen design journey online, from appointment booking to home measurement, design follow up, delivery, and installation.",
    problem:
      "The site needed to translate a complex showroom workflow into a simple digital journey users could understand and trust.",
    solution:
      "Created a guided online experience that walks users through each step: appointment, home visit, measurement capture, design process, client follow up, and final installation.",
    stack: ["Laravel", "UI/UX", "Laravel Blade (Front-end)", "Service journey UX", "Conversion copy structure"],
    outcome: "Delivered a clear and personalized online process that simplifies the path from idea to installed kitchen.",
    proofPoints: ["Live service-journey website", "Appointment-to-installation journey mapped and shipped"],
    imageUrl: withBase("/projects/oppolia-online.jpg"),
    screenshots: [
      withBase("/projects/oppolia-online.jpg"),
      "https://s.wordpress.com/mshots/v1/https://oppoliaonline.com/about-us/?w=1600",
      "https://s.wordpress.com/mshots/v1/https://oppoliaonline.com/contact-us/?w=1600",
    ],
    localLogoUrl: withBase("/OPPOLIA%20ONLINE%20LOGO.png"),
    logoUrl: "https://logo.clearbit.com/oppoliaonline.com",
    liveUrl: "https://oppoliaonline.com",
    repoUrl: "",
  },
  {
    id: "tarta-de-amor",
    name: "Tarta de Amor",
    tagline: "Brand led dessert experience built on emotion and presentation.",
    context:
      "Tarta De Amor is a premium dessert and cake brand website centered around handcrafted products, storytelling, and elevated visual presentation.",
    problem:
      "The brand needed a digital presence that felt experiential, not transactional, while still supporting product visibility and action.",
    solution:
      "Built a narrative first website combining premium brand language, signature product highlights, artisanal process storytelling, packaging focused sections, and social proof elements.",
    stack: ["Shopify Liquid", "Brand storytelling", "Premium UI", "Responsive commerce presentation"],
    outcome: "Delivered a strong emotional brand identity that makes the product feel like an experience.",
    proofPoints: ["Live premium brand website", "Story-led product presentation and key brand sections delivered"],
    imageUrl: withBase("/projects/tarta-de-amor.jpg"),
    screenshots: [
      withBase("/projects/tarta-de-amor.jpg"),
      "https://s.wordpress.com/mshots/v1/https://tartadeamor.com/#our-story?w=1600",
      "https://s.wordpress.com/mshots/v1/https://tartadeamor.com/#visit-us?w=1600",
    ],
    localLogoUrl: withBase("/logos/TartaDeAmor.svg"),
    logoUrl: "https://logo.clearbit.com/tartadeamor.com",
    liveUrl: "https://tartadeamor.com",
    repoUrl: "",
  },
  {
    id: "cashcup-sports",
    name: "CashCup Sports",
    tagline: "Community football platform for tournaments, teams, and match visibility.",
    context:
      "Cash Cup Sports is a Jeddah born community football platform built around tournaments, match tracking, team registration, player visibility, and public facing competition data.",
    problem:
      "The platform needed to unify multiple user journeys (teams, players, and fans) into one clear event driven digital experience.",
    solution:
      "Designed and structured a sports competition interface combining tournament discovery, registration flow, match center access, QR check in pathways, and player and team visibility.",
    stack: ["Node.js (Backend)", "React.js (Front-end)", "UX", "Event flow architecture", "Responsive frontend"],
    outcome: "Shipped a modern grassroots football platform with professional competition structure.",
    proofPoints: ["Live tournament platform in production", "Registration, match center, and team/player journeys implemented"],
    imageUrl: withBase("/projects/cashcup-sports.jpg"),
    screenshots: [
      withBase("/projects/cashcup-sports.jpg"),
      "https://s.wordpress.com/mshots/v1/https://cashcupsports.com/en/tournaments?w=1600",
      "https://s.wordpress.com/mshots/v1/https://cashcupsports.com/en/match-center?w=1600",
    ],
    localLogoUrl: withBase("/logo.png"),
    logoUrl: "https://logo.clearbit.com/cashcupsports.com",
    liveUrl: "https://cashcupsports.com",
    repoUrl: "",
  },
  {
    id: "toyslab-ksa",
    name: "ToysLab KSA",
    tagline: "Bilingual toy ecommerce with category first shopping flow.",
    context:
      "Toys Lab KSA is an Arabic and English toy ecommerce website focused on educational and category based shopping, including STEM and activity driven products.",
    problem:
      "The storefront needed to simplify product discovery for parents across many categories while preserving playful merchandising.",
    solution:
      "Built a bilingual retail experience with clear category architecture, segmented browsing flows, and product focused merchandising across educational and lifestyle toy sections.",
    stack: ["Shopify Liquid", "UI/UX", "Bilingual navigation", "Retail category architecture"],
    outcome: "Delivered a playful but structured store experience optimized for product discovery and shopping clarity.",
    proofPoints: ["Live bilingual ecommerce storefront", "Product discovery and category navigation rebuilt for scale"],
    imageUrl: withBase("/projects/toyslab-ksa.jpg"),
    screenshots: [
      withBase("/projects/toyslab-ksa.jpg"),
      "https://s.wordpress.com/mshots/v1/https://toyslabksa.com/en/collections/all?w=1600",
      "https://s.wordpress.com/mshots/v1/https://toyslabksa.com/en/collections/educational-games-and-constructions?w=1600",
    ],
    localLogoUrl: withBase("/logos/toyslab.webp"),
    logoUrl: "https://logo.clearbit.com/toyslabksa.com",
    liveUrl: "https://toyslabksa.com",
    repoUrl: "",
  },
  {
    id: "hadiha",
    name: "Hadiha",
    tagline: "Niche ecommerce brand centered on calm and stress relief.",
    context:
      "Hadiha is a calming products ecommerce brand built around stress relief and tactile comfort, positioning products as everyday emotional relief tools.",
    problem:
      "The challenge was differentiating the store from generic gift websites while making the emotional brand angle immediately clear.",
    solution:
      "Developed a product first experience with strong calm focused messaging, landing page clarity, and storytelling that reframes tactile products as a recognizable lifestyle concept.",
    stack: ["Shopify Liquid", "UI/UX", "Niche brand positioning", "Conversion copy", "Ecommerce layout"],
    outcome: "Created a distinct identity driven storefront with clear emotional positioning and focused product communication.",
    proofPoints: ["Live niche ecommerce website", "Messaging and merchandising aligned to brand positioning"],
    imageUrl: withBase("/projects/hadiha.jpg"),
    screenshots: [
      withBase("/projects/hadiha.jpg"),
      "https://s.wordpress.com/mshots/v1/https://hadiha.com/collections/all?w=1600",
      "https://s.wordpress.com/mshots/v1/https://hadiha.com/products?w=1600",
    ],
    localLogoUrl: withBase("/logos/hadiha.webp"),
    logoUrl: "https://logo.clearbit.com/hadiha.com",
    liveUrl: "https://hadiha.com",
    repoUrl: "",
  },
  {
    id: "ai-syria",
    name: "AI Syria",
    tagline: "Mission driven platform for AI education and entrepreneurship in Syria.",
    context:
      "AI Syria is a nonprofit style community and education platform supporting students, researchers, developers, and entrepreneurs through AI training, content, and initiatives.",
    problem:
      "The platform needed to communicate programs, communities, and partnership opportunities with clarity and institutional credibility.",
    solution:
      "Built a mission led awareness and engagement website presenting in center training, online resources, technical communities, and partnership building pathways.",
    stack: ["WordPress", "UI/UX", "Community platform UX", "Arabic first content structure", "Responsive web"],
    outcome: "Delivered a modern engagement platform aligned with education, community growth, and initiative visibility.",
    proofPoints: ["Live nonprofit/community platform", "Arabic-first information architecture and engagement paths delivered"],
    imageUrl: withBase("/projects/ai-syria.jpg"),
    screenshots: [
      withBase("/projects/ai-syria.jpg"),
      "https://s.wordpress.com/mshots/v1/https://aisyria.org/%D8%B9%D9%86-%D8%A7%D9%84%D8%AC%D9%85%D8%B9%D9%8A%D8%A9/?w=1600",
      "https://s.wordpress.com/mshots/v1/https://aisyria.org/%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D9%85%D8%B9%D9%86%D8%A7/?w=1600",
    ],
    localLogoUrl: withBase("/logos/ai-syria.webp"),
    logoUrl: "https://logo.clearbit.com/aisyria.org",
    liveUrl: "https://aisyria.org",
    repoUrl: "",
  },
  {
    id: "gravity-wrestling",
    name: "Gravity Wrestling Academy",
    tagline: "Sports academy website for a wrestling brand in Jeddah.",
    context:
      "Gravity is a sports academy website developed for a wrestling brand in Jeddah, focused on presenting the academy identity and services through a modern web presence.",
    problem:
      "The site needed to establish clear brand presence and service communication with limited publicly crawlable long form content.",
    solution:
      "Built a clean, modern academy interface prioritizing brand identity, service clarity, and streamlined visitor navigation.",
    stack: ["Next.js", "UI/UX", "Sports brand web design", "Responsive frontend"],
    outcome: "Delivered a professional academy web presence optimized for first impression and service discovery.",
    proofPoints: ["Live sports academy website", "Brand and service presentation shipped in responsive layout"],
    imageUrl: withBase("/projects/gravity-wrestling.jpg"),
    screenshots: [
      withBase("/projects/gravity-wrestling.jpg"),
      "https://s.wordpress.com/mshots/v1/https://gravity-teal.vercel.app/#programs?w=1600",
      "https://s.wordpress.com/mshots/v1/https://gravity-teal.vercel.app/#contact?w=1600",
    ],
    localLogoUrl: withBase("/gravity-03.png"),
    logoUrl: "https://logo.clearbit.com/gravity-teal.vercel.app",
    liveUrl: "https://gravity-teal.vercel.app",
    repoUrl: "",
  },
  {
    id: "kraken-production",
    name: "Kraken: Video Production & Photography",
    tagline: "Creative portfolio website for a production and photography brand.",
    context:
      "Kraken is a creative portfolio website built to present video production and photography services through a clean, modern client facing experience.",
    problem:
      "The platform needed to showcase visual identity and services clearly while keeping the browsing experience simple and polished.",
    solution:
      "Implemented a visual first portfolio structure with modern layout hierarchy and service oriented presentation.",
    stack: ["Next.js", "UI/UX", "Creative portfolio UX", "Visual presentation design"],
    outcome: "Delivered a clean production brand website designed to showcase services and strengthen presentation quality.",
    proofPoints: ["Live creative portfolio website", "Service-led visual hierarchy and navigation implemented"],
    imageUrl: withBase("/projects/kraken.png"),
    screenshots: [
      withBase("/projects/kraken.png"),
      "https://s.wordpress.com/mshots/v1/https://kraken-brown.vercel.app/#services?w=1600",
      "https://s.wordpress.com/mshots/v1/https://kraken-brown.vercel.app/#contact?w=1600",
    ],
    localLogoUrl: withBase("/logos/Kraken%20(1).svg"),
    logoTreatment: "darkArtwork",
    logoUrl: "https://logo.clearbit.com/kraken-brown.vercel.app",
    liveUrl: "https://kraken-brown.vercel.app",
    repoUrl: "",
  },
  {
    id: "elite-edition",
    name: "Elite Edition",
    tagline: "Luxury automotive showroom platform with enquiry driven conversion.",
    context:
      "Elite Edition is a Riyadh luxury automotive showroom website presenting hand picked inventory and high touch services including test drives, trade ins, financing, sourcing, and after sales care.",
    problem:
      "The site needed to communicate exclusivity and personal service while guiding high intent visitors toward enquiry rather than direct checkout.",
    solution:
      "Built a premium browsing experience with curated vehicle spotlight sections, service led trust messaging, and enquiry first conversion flow.",
    stack: ["Next.js", "UI/UX", "Luxury UI systems", "Inventory presentation architecture", "Conversion focused UX"],
    outcome: "Delivered a polished showroom website aligned with premium positioning and high touch customer journeys.",
    proofPoints: ["Live luxury showroom website", "Enquiry-first inventory and service journey deployed"],
    imageUrl: withBase("/projects/elite-edition.png"),
    screenshots: [
      withBase("/projects/elite-edition.png"),
      "https://s.wordpress.com/mshots/v1/https://elite-edition.vercel.app/en#inventory?w=1600",
      "https://s.wordpress.com/mshots/v1/https://elite-edition.vercel.app/en#contact?w=1600",
    ],
    localLogoUrl: withBase("/logos/elite%20logo%20(1).svg"),
    logoTreatment: "lightArtwork",
    logoUrl: "https://logo.clearbit.com/elite-edition.vercel.app",
    liveUrl: "https://elite-edition.vercel.app/en",
    repoUrl: "",
  },
];
