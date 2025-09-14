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
(function() {
  // Create badge
  const badge = document.createElement("div");
  badge.id = "variant-badge";
  Object.assign(badge.style, {
    position: "absolute",
    top: "15px",
    left: "15px",
    padding: "6px 12px",
    background: "rgba(0,0,0,0.7)",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "8px",
    zIndex: "9999",
    transition: "opacity 0.3s ease"
  });

  // Insert badge into product image container
  const imgContainer = document.querySelector("img[src*='products']");
  if (imgContainer && imgContainer.parentElement) {
    imgContainer.parentElement.style.position = "relative";
    imgContainer.parentElement.appendChild(badge);
  }

  function updateBadge() {
    const selected = document.querySelector("input[type=radio][name^='option']:checked");
    if (selected) {
      badge.style.opacity = "0";
      setTimeout(() => {
        badge.textContent = selected.value;
        badge.style.opacity = "1";
      }, 200);
    }
  }

  // Initial update
  updateBadge();

  // Detect changes
  document.addEventListener("change", updateBadge, true);
})();
```
## Conclusion
By following the steps outlined above, you can successfully implement a dynamic variant badge system in your Shopify store. This will enhance the visual appeal of your product listings and improve the overall shopping experience for your customers.

## Preview Link
[Preview the Implementation](https://deeptechy.myshopify.com/?_ab=0&_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaHhrWldWd2RHVmphSGt1YlhsemFHOXdhV1o1TG1OdmJRWTZCa1ZVIiwiZXhwIjoiMjAyNS0wOS0xNFQxMTowMDoyNC4yMTRaIiwicHVyIjoicGVybWFuZW50X3Bhc3N3b3JkX2J5cGFzcyJ9fQ%3D%3D--c09ebde2da7ee46548d517457974bd0fdce0cf02&_fd=0&_sc=1&key=cd745db90b1422a84897d4489cf0727aefabf09fbaa1dd77f032a2e9f3f59408&preview_theme_id=148434616519)
