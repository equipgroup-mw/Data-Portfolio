/**
 * EQUIP DASHBOARD PORTFOLIO — PROJECT DATA
 * ---------------------------------------------------------------
 * To add a new dashboard, copy an object below and edit the fields.
 * That's it — the grid, hover states and links build themselves.
 *
 * FIELDS
 *  id          string   unique slug, no spaces (used internally)
 *  title       string   dashboard name, shown large on hover
 *  client      string   who it was built for / project name
 *  platform    string   short badge label, e.g. "Power BI", "Tableau",
 *                       "Looker Studio", "Custom Build"
 *  url         string   REQUIRED — where the tile opens (new tab)
 *  thumbnail   string   optional path to a screenshot, e.g.
 *                       "assets/thumbs/my-dashboard.jpg"
 *                       Leave as null to use a generated placeholder.
 *  accent      string   placeholder colour pairing when there is no
 *                       thumbnail: "gold" | "navy" | "slate"
 *  size        string   tile shape in the grid:
 *                       "normal" | "wide" | "tall" | "large"
 * ---------------------------------------------------------------
 */

const PROJECTS = [
  {
    id: "sme-investment-pipeline",
    title: "SME Investment Readiness Pipeline",
    client: "Business Development Services",
    platform: "Power BI",
    url: "https://app.powerbi.com/",
    thumbnail: null,
    accent: "gold",
    size: "wide"
  },
  {
    id: "agribusiness-monitor",
    title: "Agribusiness & Contract Farming Monitor",
    client: "AIMS / MUSCCO",
    platform: "Power BI",
    url: "https://app.powerbi.com/",
    thumbnail: null,
    accent: "navy",
    size: "normal"
  },
  {
    id: "impact-evaluation-tracker",
    title: "Impact Evaluation Tracker",
    client: "Monitoring & Evaluation",
    platform: "Looker Studio",
    url: "https://lookerstudio.google.com/",
    thumbnail: null,
    accent: "slate",
    size: "tall"
  },
  {
    id: "womens-enterprise-dashboard",
    title: "Women-Owned Ventures in Green Energy",
    client: "Enterprise Development Programme",
    platform: "Custom Build",
    url: "#",
    thumbnail: null,
    accent: "gold",
    size: "normal"
  },
  {
    id: "financial-inclusion-scaling",
    title: "Financial Inclusion & Entrepreneurship Scaling",
    client: "FINeS",
    platform: "Tableau",
    url: "#",
    thumbnail: null,
    accent: "navy",
    size: "normal"
  },
  {
    id: "magic-wall-2025-elections",
    title: "Magic Wall for 2025 Malawi Elections",
    client: "Mibawa",
    platform: "Custom Build",
    url: "https://danyankho.github.io/Elections2025-App/",
    thumbnail: "assets/thumbs/mibawa.png", // Matches mibawa.png
    accent: "gold",
    size: "large"
  },
  {
    id: "food-processing-capacity",
    title: "Food Processing SME Capacity Tracker",
    client: "Alliance for Inclusive & Nutritious Food Processing",
    platform: "Looker Studio",
    url: "#",
    thumbnail: null,
    accent: "slate",
    size: "normal"
  },
  {
    id: "regional-sector-insights",
    title: "Regional Sector Insights",
    client: "Portfolio-wide Analysis",
    platform: "Custom Build",
    url: "#",
    thumbnail: null,
    accent: "navy",
    size: "wide"
  }
];
