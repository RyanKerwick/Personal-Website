document.addEventListener("DOMContentLoaded", () => {
  const entries = document.querySelectorAll(".entry");
  let idSeq = 0;

  entries.forEach((entry) => {
    const btn = entry.querySelector(".entry-toggle");
    const body = entry.querySelector(".entry-body");
    if (!btn || !body) return;

    if (!body.id) body.id = `entry-body-${++idSeq}`;
    btn.setAttribute("aria-controls", body.id);

    const labelEl = btn.querySelector(".label") || btn;

    const setState = (open) => {
      entry.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
      labelEl.textContent = open ? "Collapse" : "Expand";
    };

    setState(false);

    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      setState(!open);
    });
  });
});
