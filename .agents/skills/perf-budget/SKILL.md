---
name: perf-budget
description: Strict performance budgets, WebGL lifecycle management, asset limits, and mobile optimization rules for IMPULSE.
---

# Performance Budget & Asset Verification (IMPULSE)

## Hard Budgets
1. **Initial Load JavaScript**: ≤ `250 KB` gzipped (excluding lazy-loaded 3D WebGL chunks).
2. **3D Bundle**: Lazy-loaded behind `<Suspense>` + `IntersectionObserver`, ≤ `600 KB` total.
3. **Total Page Weight**: < `3.0 MB` on initial full load.
4. **LCP (Largest Contentful Paint)**: < `2.5s` on throttled 4G.
5. **Frame Rates**:
   * Desktop: Stable `60 FPS`
   * Mid-range mobile/Android: `≥ 30 FPS`
6. **Device Pixel Ratio (DPR)**:
   * Desktop: Capped at `1.5` (never render at retina 3x for Three.js canvases)
   * Mobile: Strictly `1.0`
7. **Asset Limits**:
   * Images: WebP / AVIF only, max `180 KB` each.
   * Background Video (if present): Abstract 3–5s loop, no faces/text, ≤ `1.5 MB`, paused if `saveData` enabled.
   * 3D Models: GLB Draco-compressed, texture-compressed (WebP/KTX2).

## Non-Negotiable Memory & Lifecycle Rules
* **IntersectionObserver**: Canvases outside viewport must suspend rendering loop (`renderer.setAnimationLoop(null)` or pause clock).
* **Dispose on unmount**: Always traverse Three.js scenes on component unmount and explicitly dispose of geometries, textures, materials, and renderers to prevent catastrophic WebGL context leaks:
  ```javascript
  scene.traverse((obj) => {
    if (obj.geometry) obj.geometry.dispose();
    if (obj.material) {
      if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
      else obj.material.dispose();
    }
  });
  renderer.dispose();
  ```
* **Fallback Strategy**:
  * Detect WebGL support via `window.WebGLRenderingContext`.
  * If WebGL unavailable OR `prefers-reduced-motion: reduce`: display high-resolution SVG/WebP poster graphic with static lighting; complete content remains 100% accessible.
