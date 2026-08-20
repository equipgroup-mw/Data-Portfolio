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
    id: "journy-vsla-poultry",
    title: "Journey of a VSLA's Poultry Farm",
    client: "Proto / Hail & Cotton",
    platform: "Custom Build",
    url: "https://equipgroup-mw.github.io/proto-chickens-dashboard/",
    thumbnail: "assets/thumbs/proto.jpg", // Matches proto.jpg
    accent: "gold",
    size: "wide"
  },
  {
    id: "dcafs-ngo-impact",
    title: "NGO's Impact on the Nation",
    client: "DCAFS & TIPDeP",
    platform: "Power BI",
    url: "https://equipgroup-mw.github.io/DCAFS-dashboard/",
    thumbnail: "assets/thumbs/m.png", // Matches DCAFS.png
    accent: "navy",
    size: "normal"
  },
  {
    id: "financial-scaling-vsla",
    title: "Financial Scaling of a Network of VSLA Groups",
    client: "Hail & Cotton",
    platform: "Looker Studio",
    url: "https://lookerstudio.google.com/",
    thumbnail: "assets/thumbs/H&C.jpg", // Matches H&C.jpg
    accent: "slate",
    size: "tall"
  },
  {
    id: "ngo-impact-on-nation",
    title: "NGO's Impact on the Nation",
    client: "Point of Progress",
    platform: "Custom Build",
    url: "https://equipgroup-mw.github.io/POP-reach/",
    thumbnail: "assets/thumbs/popLOGO.png", // Matches popLOGO.png
    accent: "gold",
    size: "normal"
  },
  {
    id: "verification-financial-scaling",
    title: "Verification of Financial & Entrepreneurial Scaling",
    client: "Zantchito",
    platform: "Tableau",
    url: "https://equipgroup-mw.github.io/Zantchito/",
    thumbnail: "assets/thumbs/Z.png", // Matches Z.png
    accent: "navy",
    size: "normal"
  },
  {
    id: "magic-wall-2025-elections",
    title: "Magic Wall for 2025 Malawi Elections",
    client: "Mibawa",
    platform: "Custom Build",
    url: "https://danyankho.github.io/Elections2025-App/",
    thumbnail: "assets/thumbs/mibawa.jpg", // Matches mibawa.jpg
    accent: "gold",
    size: "large"
  },
  {
    id: "youth-entrepreneurship-agriculture",
    title: "The Youth Entrepreneurship for the Future of Agriculture",
    client: "MAFECO / AGRA",
    platform: "Looker Studio",
    url: "https://equipgroup-mw.github.io/apatsa-dashboard/",
    thumbnail: "assets/thumbs/mafeco.png", // Matches mafeco.png
    accent: "slate",
    size: "normal"
  },
  {
    id: "elimfarms-productivity-growth",
    title: "Productivity & Growth of a Mega Farm",
    client: "Elim Farms",
    platform: "Custom Build",
    url: "https://equipgroup-mw.github.io/ElimFarms/",
    thumbnail: "assets/thumbs/elim.png", // Matches elimfarms.png
    accent: "navy",
    size: "wide"
  },
  {
    id: "ngo-governance",
    title: "Nationwide Governance of Malawi's NGO's",
    client: "NGORA",
    platform: "Custom Build",
    url: "https://danyankho.github.io/NGORA-dashboard-map/",
    thumbnail: "assets/thumbs/ngora.png", // Matches ngora.png
    accent: "navy",
    size: "normal"
  }
];
