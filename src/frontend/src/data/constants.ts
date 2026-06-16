import {
  Atom,
  Award,
  FlaskConical,
  Globe,
  Heart,
  Leaf,
  Sprout,
  Users,
} from "lucide-react";

export const FREEZE_CATEGORIES = [
  {
    id: "moringa-coconut",
    label: "Moringa & Coconut",
    description:
      "Premium, nutrient-dense Moringa and Coconut products. Sourced from organic, certified farms and processed using advanced methods to fully retain their exceptional wellness benefits and purity.",
    products: [
      "Moringa leaves powder",
      "Moringa Tea Bags",
      "Coconut Powder - High Fat",
      "Coconut Powder - Low Fat",
      "Moringa Flower - Dried",
    ],
    color: "teal",
  },
  {
    id: "fruit-pulps",
    label: "Fruit Pulps",
    description:
      "Premium natural fruit pulps made from high-quality sun-ripened fruits, processed to preserve their rich flavor, thick texture, and natural vitamins.",
    products: ["Mango Pulp"],
    color: "orange",
  },
  {
    id: "vegetables",
    label: "Freeze Dried Vegetables",
    description:
      "Farm-fresh vegetables preserved instantly to retain colour, flavour, texture, and nutrition. Lightweight, shelf-stable, and ideal for clean-label food innovation.",
    products: [
      "Carrot",
      "Beetroot",
      "Tomato",
      "Capsicum (Red / Green / Yellow)",
      "Bhendi / Okra (Red & Green)",
      "Ginger",
      "Sweet Potato",
      "Pumpkin",
      "Cluster Beans",
      "French Beans",
      "Shallots",
      "Onion",
      "Cauliflower",
      "Green Peas",
      "Spinach Leaves",
      "Garlic",
      "Mushroom",
      "Moringa Leaves",
      "Potato",
      "Fenugreek Leaves",
    ],
    color: "green",
  },
  {
    id: "fruits",
    label: "Freeze Dried Fruits",
    description:
      "Freeze-dried fruits are real fruits with moisture removed at low temperatures to preserve their natural taste, color, and nutrients. They're light, crunchy, and perfect for healthy snacking, cereals, desserts, and on-the-go nutrition.",
    products: [
      "Mango",
      "Banana",
      "Jackfruit",
      "Pineapple",
      "Guava",
      "Papaya",
      "Sapota (Chikoo)",
      "Apple",
      "Strawberry",
    ],
    color: "amber",
  },
  {
    id: "microgreens",
    label: "Freeze Dried Microgreens",
    description:
      "Microgreens preserved at peak growth stage to deliver concentrated nutrition, vibrant colour, and intense flavour — perfect for premium wellness and functional food markets.",
    products: [
      "Broccoli",
      "Amaranthus (Red / Green)",
      "Radish (Pink / White)",
      "Red Cabbage",
      "Sunflower",
      "Mint",
      "Basil",
      "Pea Shoot",
      "Fenugreek",
      "Wheatgrass",
      "Mustard",
      "Spinach",
      "Lemongrass",
    ],
    color: "emerald",
  },
];

export const PRODUCT_IMAGES: Record<string, string> = {
  // Vegetables
  Carrot: "/assets/product-carrot-transparent.dim_400x300.webp",
  Tomato: "/assets/product-tomato-transparent.dim_400x300.webp",
  Beetroot: "/assets/product-beetroot-transparent.dim_400x300.webp",
  "Capsicum (Red / Green / Yellow)": "/assets/capsicum.webp",
  "Bhendi / Okra (Red & Green)": "/assets/freeze-dried-okra-500x500.webp",
  Ginger: "/assets/freeze-dried-ginger.webp",
  "Sweet Potato": "/assets/SweetPotato.webp",
  Pumpkin: "/assets/pumpkin.webp",
  "French Beans": "/assets/freeze-dried-green-beans-500x500.webp",
  Shallots: "/assets/shallots.webp",
  Onion: "/assets/onion.webp",
  Cauliflower: "/assets/Cauliflower-3.webp",
  "Green Peas": "/assets/freeze-dried-green-peas.webp",
  "Spinach Leaves": "/assets/product-spinach-transparent.dim_400x300.webp",
  Garlic: "/assets/freeze-dried-garlic-500x500.webp",
  Mushroom: "/assets/product-mushroom-transparent.dim_400x300.webp",
  "Moringa Leaves": "/assets/moringa.webp",
  Potato: "/assets/potato.webp",
  "Fenugreek Leaves": "/assets/freeze-dried-fenugreek-methi.webp",
  // Fruits
  Mango: "/assets/product-mango-transparent.dim_400x300.webp",
  Banana: "/assets/product-banana-transparent.dim_400x300.webp",
  Jackfruit: "/assets/jackfruit.webp",
  Pineapple: "/assets/product-pineapple-transparent.dim_400x300.webp",
  Guava: "/assets/freeze-dried-guava.webp",
  Papaya: "/assets/Freeze-Dried-Papaya.webp",
  "Sapota (Chikoo)": "/assets/freeze-dried-sapodilla-chikoo.webp",
  Apple: "/assets/apples_fuji-fs_productfd-aerial_2.webp",
  Strawberry: "/assets/product-strawberry-transparent.dim_400x300.webp",
  // Microgreens
  Broccoli: "/assets/product-broccoli-microgreen-transparent.dim_400x300.webp",
  "Radish (Pink / White)":
    "/assets/product-radish-microgreen-transparent.dim_400x300.webp",
  "Red Cabbage": "/assets/red-cabbage.webp",
  Spinach: "/assets/spinach.webp",
  Wheatgrass: "/assets/product-wheatgrass-transparent.dim_400x300.webp",
  // Moringa & Coconut
  "Moringa leaves powder": "/assets/moringa-leaves-powder.webp",
  "Moringa Tea Bags": "/assets/moringa-tea-bags.webp",
  "Coconut Powder - High Fat": "/assets/coconut-powder-high-fat.webp",
  "Coconut Powder - Low Fat": "/assets/coconut-powder-low-fat.webp",
  "Moringa Flower - Dried": "/assets/moringa-flower-dried.webp",
  // Fruit Pulps
  "Mango Pulp": "/assets/mango-pulp.webp",
};

export const CATEGORY_BADGE_COLORS: Record<string, string> = {
  vegetables: "bg-green-100 text-green-800 border-green-200",
  fruits: "bg-amber-100 text-amber-800 border-amber-200",
  microgreens: "bg-emerald-100 text-emerald-800 border-emerald-200",
  "moringa-coconut": "bg-teal-100 text-teal-800 border-teal-200",
  "fruit-pulps": "bg-orange-100 text-orange-800 border-orange-200",
};

export const CATEGORY_GRADIENT_COLORS: Record<string, string> = {
  vegetables: "from-green-100 to-green-200",
  fruits: "from-amber-100 to-amber-200",
  microgreens: "from-emerald-100 to-emerald-200",
  "moringa-coconut": "from-teal-100 to-teal-200",
  "fruit-pulps": "from-orange-100 to-orange-200",
};

export const WHY_US = [
  {
    icon: Award,
    title: "Quality Assured",
    description:
      "Quality assurance integrated at every stage — from seed selection and cultivation to processing, packaging, and export.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "Committed to sustainable agricultural practices and eco-friendly production systems that protect the environment.",
  },
  {
    icon: Globe,
    title: "Ethical Sourcing",
    description:
      "Fair trade partnerships and ethical sourcing across India's premium agricultural regions.",
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description:
      "Supporting rural development, farmers' training, and sustainable livelihood programs across farming communities.",
  },
];

export const EXPERTISE = [
  {
    icon: Leaf,
    title: "Sustainable Natural Farming",
    description:
      "Eco-friendly cultivation practices that preserve soil health and biodiversity.",
  },
  {
    icon: Sprout,
    title: "Export-Quality Produce",
    description:
      "Farm-fresh fruits and vegetables grown to meet the highest international quality standards.",
  },
  {
    icon: FlaskConical,
    title: "Value Addition",
    description:
      "Dehydrated vegetables, functional food ingredients, and plant-based protein isolates.",
  },
  {
    icon: Atom,
    title: "Nutraceuticals & Functional Foods",
    description:
      "Science-backed formulations bridging traditional superfoods with modern health needs.",
  },
  {
    icon: Heart,
    title: "Health & Wellness Products",
    description:
      "Traditional superfood formulations and health-focused food solutions.",
  },
  {
    icon: Users,
    title: "Community & Farmer Support",
    description:
      "Capacity building, wholesale distribution, and livelihood development for farming communities.",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Leadership", href: "#founders" },
  { label: "Contact", href: "#contact" },
];

export const FOUNDERS = [
  {
    name: "Dr. Gnanaraja R.",
    title: "Founder & Managing Director",
    bio: "Dr. R. Gnanaraja is a biochemistry professional and researcher with a Ph.D. from SHIATS, Allahabad, and postgraduate and undergraduate degrees from Bharathidasan University. He has experience in research and development, teaching, hospital biochemistry, journal editing, and research fellowship roles. His work focuses on medicinal plants, hepatocellular carcinoma, phytochemical analysis, antioxidant studies, and hepatoprotective research, supported by publications and conference presentations. He also has strong laboratory skills in molecular biology and in-vivo biology, along with experience in project management, scientific communication, and academic organization.",
    cvLink: "/assets/Raja_CV.pdf",
    expertise: ["Sustainable Agriculture", "Export Strategy", "Supply Chain"],
    researchPapers: [
      {
        title:
          "In-vivo Hepatoprotective and Antioxidant Studies of Medicinal Plants",
        url: "https://www.thepharmajournal.com/vol3Issue7/Issue_september_2014/28.1.pdf",
        description:
          "A comprehensive study on the hepatoprotective effects and antioxidant properties of specific medicinal plant extracts.",
      },
      {
        title:
          "Preventive Effect of Tephrosia Purpurea Against Hepatocellular Carcinoma",
        url: "https://www.macrothink.org/journal/index.php/jbls/article/view/5276",
        description:
          "Research demonstrating the preventive properties of Tephrosia Purpurea against N,N-Diethylnitrosamine induced carcinoma in Swiss Albino mice.",
      },
      {
        title:
          "Qualitative and Quantitative Phytochemical Analysis of Selected Fabaceae Plants",
        url: "https://www.thepharmajournal.com/vol3Issue7/Issue_september_2014/7a.1.pdf",
        description:
          "Detailed phytochemical analysis assessing the therapeutic potential of selected medicinal plants from the Fabaceae family.",
      },
      {
        title:
          "Antitumor Activity and In Vivo Antioxidant Status of T. Purpurea",
        url: "https://www.researchgate.net/publication/281079506_ANTITUMOR_ACTIVITY_AND_IN_VIVO_ANTIOXIDANT_STATUS_OF_T_PURPUREA_AGAINST_DENA_INDUCED_HEPATOCELLULAR_CARCINOMA_IN_SWISS_ALBINO_MICE",
        description:
          "Evaluating the antitumor efficacy and antioxidant status of T. Purpurea against DENA-induced hepatocellular carcinoma.",
      },
    ],
  },
  {
    name: "Ubakara Sheela R.",
    title: "Co-Founder & Operations",
    bio: "A seasoned professional with deep expertise in agri-processing, quality management, and value-added food products. She oversees the advanced processing unit in Tiruchirappalli, ensuring that every batch of fruits, vegetables, and grocery products meets the highest international standards. Her focus on innovation has driven VGF's expansion into functional foods and nutraceuticals.",
    expertise: ["Agri-Processing", "Quality Assurance", "Product Innovation"],
  },
];
