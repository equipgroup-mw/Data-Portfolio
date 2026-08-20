(function () {
  "use strict";

  /* A small abstract bar+line chart, used as a subtle watermark on
     placeholder tiles (projects with no thumbnail image supplied). */
  var CHART_SVG =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140">' +
      '<rect x="14" y="70" width="20" height="55" fill="white"/>' +
      '<rect x="46" y="40" width="20" height="85" fill="white"/>' +
      '<rect x="78" y="88" width="20" height="37" fill="white"/>' +
      '<rect x="110" y="20" width="20" height="105" fill="white"/>' +
      '<polyline points="10,60 50,30 82,55 114,10 150,26 190,4" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>'
    );

  var ACCENTS = {
    gold: { a: "#2a2110", b: "#a8935a" },
    navy: { a: "#0d2136", b: "#1a3450" },
    slate: { a: "#20262c", b: "#57636d" }
  };

  function externalLinkIcon() {
    return (
      '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      "</svg>"
    );
  }

  function buildTile(project) {
    var a = document.createElement("a");
    a.className = "tile size-" + (project.size || "normal");
    a.href = project.url || "#";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", project.title + " — opens in a new tab");

    var media = document.createElement("div");
    media.className = "tile-media";

    if (project.thumbnail) {
      var img = document.createElement("img");
      img.src = project.thumbnail;
      img.alt = "";
      img.loading = "lazy";
      media.appendChild(img);
    } else {
      var ph = document.createElement("div");
      ph.className = "placeholder";
      var colors = ACCENTS[project.accent] || ACCENTS.navy;
      ph.style.setProperty("--tile-a", colors.a);
      ph.style.setProperty("--tile-b", colors.b);
      ph.style.setProperty("--chart-mask", 'url("' + CHART_SVG + '")');
      media.appendChild(ph);
    }

    var sheen = document.createElement("div");
    sheen.className = "tile-sheen";

    var badge = document.createElement("div");
    badge.className = "tile-badge";
    badge.textContent = project.platform || "Dashboard";

    var arrow = document.createElement("div");
    arrow.className = "tile-arrow";
    arrow.innerHTML = externalLinkIcon();

    var overlay = document.createElement("div");
    overlay.className = "tile-overlay";
    overlay.innerHTML =
      '<div class="tile-rule"></div>' +
      '<div class="tile-title">' + escapeHTML(project.title) + "</div>" +
      '<div class="tile-meta">' + escapeHTML(project.client || "") + "</div>";

    a.appendChild(media);
    a.appendChild(sheen);
    a.appendChild(badge);
    a.appendChild(arrow);
    a.appendChild(overlay);

    return a;
  }

  function escapeHTML(str) {
    var div = document.createElement("div");
    div.textContent = str || "";
    return div.innerHTML;
  }

  function renderGrid() {
    var grid = document.getElementById("dashboard-grid");
    if (!grid || typeof PROJECTS === "undefined") return;
    var frag = document.createDocumentFragment();
    PROJECTS.forEach(function (p) {
      frag.appendChild(buildTile(p));
    });
    grid.appendChild(frag);
  }

  function revealOnScroll() {
    var items = document.querySelectorAll(".tile, .reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach(function (el) { io.observe(el); });
  }

  function headerScrollState() {
    var header = document.querySelector(".site-header");
    var backToTop = document.querySelector(".back-to-top");
    if (!header) return;
    function onScroll() {
      var y = window.scrollY || document.documentElement.scrollTop;
      header.classList.toggle("scrolled", y > 40);
      if (backToTop) backToTop.classList.toggle("show", y > 800);
    }
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var decimals = el.getAttribute("data-decimals") ? parseInt(el.getAttribute("data-decimals"), 10) : 0;
    var duration = 1400;
    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = target * eased;
      el.textContent = decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = decimals ? target.toFixed(decimals) : target.toLocaleString();
    }
    requestAnimationFrame(step);
  }

  function statCounters() {
    var stats = document.querySelectorAll("[data-count]");
    if (!stats.length) return;
    if (!("IntersectionObserver" in window)) {
      stats.forEach(countUp);
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            countUp(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    stats.forEach(function (el) { io.observe(el); });
  }

  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // DYNAMIC VIEWPORT HEIGHT (Fixes mobile address bar jump)
  // ---------------------------------------------------------
  function setHeroHeight() {
    var hero = document.querySelector('.hero');
    if (hero) {
      // 100dvh handles modern browsers, but this is a fallback for older ones
      // ADDED: 'px' to the end of this string so it applies correctly!
      hero.style.height = window.innerHeight + 'px';
    }
  }

  // ---------------------------------------------------------
  // LOAD HERO SVG EXTERNALLY
  // ---------------------------------------------------------
  // Fetches the SVG from the assets folder and injects it inline 
  // so that CSS `color` (currentColor) applies correctly.
  function loadHeroSVG() {
    var svgContainer = document.getElementById("hero-logo-svg");
    if (!svgContainer) return;

    var svgUrl = "assets/equip-logo-large.svg"; // Path to your uploaded SVG

    fetch(svgUrl)
      .then(function (response) {
        if (!response.ok) throw new Error("SVG not found");
        return response.text();
      })
      .then(function (svgText) {
        // Create a temporary element to parse the SVG text
        var temp = document.createElement("div");
        temp.innerHTML = svgText;
        var svgElement = temp.querySelector("svg");

        if (svgElement) {
          // Ensure it scales to fit the container perfectly
          svgElement.setAttribute("width", "100%");
          svgElement.setAttribute("height", "100%");
          // Remove the broken img tag and inject the actual SVG
          svgContainer.parentNode.replaceChild(svgElement, svgContainer);
        }
      })
      .catch(function (err) {
        console.warn("Could not load hero SVG:", err);
        // Fallback: if fetch fails (e.g. local file:// restrictions), just assign as src
        svgContainer.src = svgUrl; 
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderGrid();
    revealOnScroll();
    headerScrollState();
    statCounters();

    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    // Initialize dynamic hero height
    setHeroHeight();
    window.addEventListener('resize', setHeroHeight);

    // Load the large SVG projection
    loadHeroSVG();
  });
})();