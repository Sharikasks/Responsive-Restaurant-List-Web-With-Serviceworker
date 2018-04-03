# Restaurant Reviews Project
---
## Overview
This project is part of FEWDND (Front-End Web Development Nano-Degree) @Udacity. The main purposes are to check for my ability in handling with
- **grid css** styles (w/o 3rd party framework like bootstrap)
- **responsive pages** (supporting mobile, tablet, and desktop)
- **service worker** to cache for offline usage
- **accessibility** by tabbing

## UI (Responsive & Grid CSS)
### Desktop
<div style="text-align:center;">
  <img src="desktop.png" alt="desktop image" style="width: 100%;"/>
  <p>[Desktop UI Screenshot]</p>
</div>

### Tablet
<div style="text-align:center;">
  <img src="tablet.png" alt="tablet image" style="width: 80%;"/>
  <p>[Tablet UI Screenshot]</p>
</div>

### Mobile
<div style="text-align:center;">
  <img src="mobile.png" alt="mobile image" style="width: 60%;"/>
  <p>[Mobile UI Screenshot]</p>
</div>

## Implementation details
### CSS grid
- grid-template-columns style is used with repeat() macro to indicate the number of columns
- grid property value is used in display style to indicate the elements support grid layout

### Responsive
- used media query (@media) with break points at 1024px, 768px, and 480px.

### Service Worker
- two separate service workers are added for the main page(index.html) and the detail page(restaurant_info.html)
- basic URLs for .html, .css, and .js files are statically added at first
- whenever there is a fetch request, caches are looked up so to return if there are resources cached. if it is the new fetch request, it will go through the network and be cached.

## References
- media query
  - https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
- grid css
  - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
  - https://css-tricks.com/snippets/css/complete-guide-grid/
- service workers
  - https://developers.google.com/web/fundamentals/primers/service-workers/
  - https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
  - https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
- ARIA
  - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
  - http://karlgroves-sandbox.com/CheatSheets/ARIA-Cheatsheet.html
  - https://www.w3.org/TR/using-aria/
- Udacity
  - https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001
