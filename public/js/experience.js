document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".collapsible-card");

  let idSeq = 0;
  cards.forEach(card => {
    const btn = card.querySelector(".collapsible-toggle");
    const content = card.querySelector(".collapsible-content");
    if (!btn || !content) return;

    // Accessibility wiring
    if (!content.id) content.id = `collapsible-${++idSeq}`;
    btn.setAttribute("aria-controls", content.id);

    const labelEl = btn.querySelector(".label") || btn;

    const setState = (open) => {
      card.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
      labelEl.textContent = open ? "Show less" : "Show more";
    };

    // initial collapsed
    setState(false);

    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      setState(!open);
    });
  });
});
