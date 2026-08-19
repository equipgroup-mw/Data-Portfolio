// ==========================================================
// PORTFOLIO DATA CONFIGURATION
// ==========================================================
// TO ADD A NEW DASHBOARD:
// 1. Drop your image into the /assets/images/ folder.
// 2. Copy one of the objects below { ... } and paste it at the bottom of the list.
// 3. Update the text inside the quotes "".
// 
// sizeClass options: 
// "" (Default 1x1 square/rectangle)
// "size-wide" (Takes up 2 columns)
// "size-tall" (Takes up 2 rows)
// ==========================================================

const portfolioItems = [
  {
    id: 1,
    title: "+45% Revenue Growth",
    subtitle: "Acme Corp - Sales Dashboard",
    image: "assets/images/dashboard-sales.jpg",
    sizeClass: "size-wide" 
  },
  {
    id: 2,
    title: "Real-time Fleet Tracking",
    subtitle: "LogiTrack - Ops Dashboard",
    image: "assets/images/dashboard-fleet.jpg",
    sizeClass: "" // Default size
  },
  {
    id: 3,
    title: "Customer Churn Reduction",
    subtitle: "SaaS Inc. - Retention Dashboard",
    image: "assets/images/dashboard-churn.jpg",
    sizeClass: "size-tall"
  },
  {
    id: 4,
    title: "Inventory Turnover Rate",
    subtitle: "RetailPro - Supply Chain",
    image: "assets/images/dashboard-inventory.jpg",
    sizeClass: "" // Default size
  }
];
