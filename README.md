# Task: Dynamic Variant Badge Injection in shopify store
This task involves creating a dynamic badge system for product variants in a Shopify store. The badges will be displayed on product images to indicate special variant color name such as "Red", "Blue", "Green", etc. The goal is to enhance the user experience by visually distinguishing different product variants.
## Objectives
- Create visually appealing badges that can be dynamically injected into product images based on the selected variant.
- Ensure that the badges are responsive and look good on all devices (desktop, tablet, mobile).
- Implement the badge system in a way that does not significantly impact page load times or overall site performance.
- Ensure compatibility with major browsers (Chrome, Firefox, Safari, Edge).
## Steps to Implement
1. **Design the Badge**: Create a simple and attractive badge design using CSS. The badge should be easily readable and should not obstruct the product image significantly.
2. **JavaScript for Dynamic Injection**: Write a JavaScript function that listens for changes in the variant selection. When a variant is selected, the function should update the badge text and style accordingly.
3. **Responsive Design**: Use CSS media queries to ensure that the badge looks good on all screen sizes. Adjust the size and position of the badge based on the device being used.
4. **Performance Optimization**: Minimize the impact on page load times by optimizing the JavaScript code and using efficient DOM manipulation techniques.
5. **Cross-Browser Testing**: Test the implementation across different browsers to ensure consistent behavior and appearance.


## Example Code Snippet
```javascript
(function () {
  const BADGE_ID = "variant-badge";

  function createBadge() {
    let el = document.getElementById(BADGE_ID);
    if (!el) {
      el = document.createElement("div");
      el.id = BADGE_ID;
      Object.assign(el.style, {
        position: "absolute",
        top: "12px",
        left: "12px",
        padding: "6px 14px",
        borderRadius: "12px",
        fontSize: "14px",
        fontWeight: "600",
        color: "#fff",
        background: "rgba(0, 0, 0, 0.7)",
        zIndex: "10",
        pointerEvents: "none",
        opacity: "0",
        transform: "translateY(-5px)",
        transition: "opacity 300ms ease, transform 300ms ease"
      });
    }
    return el;
  }

  function updateBadge() {
    const variantInput = document.querySelector("input[type=radio][name*='Color']:checked");
    const ulContainer = document.querySelector(".product__media-list.contains-media");
    const activeMedia = document.querySelector(".product__media-item.is-active");

    if (!variantInput || !activeMedia) return;

    const variant = variantInput.value;
    const badge = createBadge();
    badge.textContent = variant;
    badge.style.background = variant;
    badge.style.opacity = "0";
    badge.style.transform = "translateY(-5px)";

    ulContainer.style.position = "relative";
    ulContainer.appendChild(badge);

    requestAnimationFrame(() => {
      badge.style.opacity = "1";
      badge.style.transform = "translateY(0)";
    });
  }
  document.addEventListener("change", updateBadge, true);

  updateBadge();
  console.log("✅ Variant Badge Initialized & Listening for Changes");
})();
```
The above code you have to add in your Shopify store's theme.liquid file or in a custom JavaScript file that is included in your theme.


## Conclusion
By following the steps outlined above, you can successfully implement a dynamic variant badge system in your Shopify store. This will enhance the visual appeal of your product listings and improve the overall shopping experience for your customers.

## Preview Link
[Preview the Implementation](https://deeptechy.myshopify.com/?_ab=0&_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaHhrWldWd2RHVmphSGt1YlhsemFHOXdhV1o1TG1OdmJRWTZCa1ZVIiwiZXhwIjoiMjAyNS0wOS0xNFQxMTowMDoyNC4yMTRaIiwicHVyIjoicGVybWFuZW50X3Bhc3N3b3JkX2J5cGFzcyJ9fQ%3D%3D--c09ebde2da7ee46548d517457974bd0fdce0cf02&_fd=0&_sc=1&key=cd745db90b1422a84897d4489cf0727aefabf09fbaa1dd77f032a2e9f3f59408&preview_theme_id=148434616519)
