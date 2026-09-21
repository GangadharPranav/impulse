---
name: progressive-blur
description: "Create a layered CSS progressive blur using multiple backdrop-filter masks for depth and softness. Use when asked for progressive blur, gradient blur overlay, or stepped blur masks that fade from an edge of the viewport."
---

# Progressive Blur Skill

By Meng To (`MengTo/skills/agent-skills/web-design/progressive-blur`).

## Workflow
1. Confirm placement (top or bottom), height, and z-index relative to UI.
2. Provide the matching snippet and a short usage checklist.
3. Offer only targeted tweaks (height, blur steps, direction, opacity stops).

## Usage Checklist
- Insert the HTML inside `<body>` or the target container.
- Keep the `.gradient-blur` element near the top of the DOM.
- Ensure the background behind it exists (backdrop-filter blurs what is behind).
- Adjust `z-index` to sit above content but below modals.

## Top Blur (from top)
```html
<div class="gradient-blur">
  <div></div><div></div><div></div><div></div><div></div><div></div>
</div>
<style>
  .gradient-blur {
    position: fixed;
    z-index: 5;
    inset: 0 0 auto 0;
    height: 14%;
    pointer-events: none;
  }

  .gradient-blur > div,
  .gradient-blur::before,
  .gradient-blur::after {
    position: absolute;
    inset: 0;
  }

  .gradient-blur::before {
    content: "";
    z-index: 1;
    backdrop-filter: blur(0.5px);
    mask: linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%);
  }

  .gradient-blur > div:nth-of-type(1) {
    z-index: 2;
    backdrop-filter: blur(1px);
    mask: linear-gradient(to top, rgba(0,0,0,0) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 37.5%, rgba(0,0,0,0) 50%);
  }

  .gradient-blur > div:nth-of-type(2) {
    z-index: 3;
    backdrop-filter: blur(2px);
    mask: linear-gradient(to top, rgba(0,0,0,0) 25%, rgba(0,0,0,1) 37.5%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 62.5%);
  }

  .gradient-blur > div:nth-of-type(3) {
    z-index: 4;
    backdrop-filter: blur(4px);
    mask: linear-gradient(to top, rgba(0,0,0,0) 37.5%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 62.5%, rgba(0,0,0,0) 75%);
  }

  .gradient-blur > div:nth-of-type(4) {
    z-index: 5;
    backdrop-filter: blur(8px);
    mask: linear-gradient(to top, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 62.5%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 87.5%);
  }

  .gradient-blur::after {
    content: "";
    z-index: 6;
    backdrop-filter: blur(16px);
    mask: linear-gradient(to top, rgba(0,0,0,0) 62.5%, rgba(0,0,0,1) 75%, rgba(0,0,0,1) 100%);
  }
</style>
```
