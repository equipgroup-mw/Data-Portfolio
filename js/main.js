// ==========================================================
// DYNAMIC PORTFOLIO RENDERER
// ==========================================================
// This script reads the 'portfolioItems' array from data.js
// and automatically builds the HTML for the grid.
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("portfolio-grid");

  // Check if the container exists and data is loaded
  if (!gridContainer || typeof portfolioItems === 'undefined') {
    console.error("Error: Could not find grid container or data is missing.");
    return;
  }

  // Map through the data array and generate HTML for each item
  const generateHTML = portfolioItems.map(item => {
    // Fallback for sizeClass if it wasn't defined in data.js
    const sizeClass = item.sizeClass || "";

    return `
      <div class="portfolio-item ${sizeClass}">
        <img src="${item.image}" alt="${item.subtitle}">
        <div class="portfolio-overlay">
          <h3 class="overlay-title">${item.title}</h3>
          <p class="overlay-subtitle">${item.subtitle}</p>
        </div>
      </div>
    `;
  }).join('');

  // Inject the generated HTML into the grid container
  gridContainer.innerHTML = generateHTML;
});
