/* =====================================================================
   CASA — main.js
   Small, dependency-free progressive enhancements.
   ===================================================================== */
(function () {
  "use strict";

  /* 1. Add a shadow/solid background to the header once the user scrolls. */
  var hdr = document.getElementById("hdr");
  if (hdr) {
    window.addEventListener("scroll", function () {
      hdr.classList.toggle("scrolled", window.scrollY > 40);
    }, { passive: true });
  }

  /* 2. Highlight today's row in the opening-hours table.
        getDay(): 0 = Sunday … 6 = Saturday, matching the data-d attributes. */
  var today = new Date().getDay();
  var row = document.querySelector('#hours tr[data-d="' + today + '"]');
  if (row) row.classList.add("today");

  /* 3. Reveal sections as they scroll into view (graceful fallback if
        IntersectionObserver is unavailable: everything just shows). */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }
})();
