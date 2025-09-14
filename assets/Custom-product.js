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