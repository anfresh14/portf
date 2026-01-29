/* ===============================
   EFECTO NOISE EDITORIAL
================================ */
const section = document.querySelector(".editorial-bg");

if (section) {
  section.addEventListener("mousemove", (e) => {
    section.style.setProperty("--noise-x", `${e.clientX}px`);
    section.style.setProperty("--noise-y", `${e.clientY}px`);
  });

  setInterval(() => {
    document.documentElement.style.setProperty(
      "--noise-x",
      Math.random() * 100 + "px"
    );
    document.documentElement.style.setProperty(
      "--noise-y",
      Math.random() * 100 + "px"
    );
  }, 300);
}

/* ===============================
   MODAL EDITORIAL (EL QUE YA TENÍAS)
================================ */
document.querySelectorAll(".editorial-card").forEach(card => {
  card.addEventListener("click", () => {
    const modal = document.getElementById("projectModal");
    if (!modal) return;

    document.getElementById("modalImg").src = card.querySelector("img").src;
    document.getElementById("modalTitle").innerText =
      card.querySelector("h2")?.innerText || "";
    document.getElementById("modalDesc").innerText =
      card.querySelector("p")?.innerText || "";

    modal.style.display = "flex";
  });
});

document.getElementById("modalClose")?.addEventListener("click", () => {
  document.getElementById("projectModal").style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target?.id === "projectModal") {
    document.getElementById("projectModal").style.display = "none";
  }
});

/* ===============================
   TRANSICIÓN ENTRE PÁGINAS
================================ */
window.addEventListener("load", () => {
  const scrollY = sessionStorage.getItem("scrollY");
  if (scrollY) {
    window.scrollTo(0, parseInt(scrollY));
  }
});

window.addEventListener("load", () => {
  const scrollY = sessionStorage.getItem("scrollY");
  if (scrollY) {
    window.scrollTo(0, parseInt(scrollY));
  }
});


/* ===============================
   PINTEREST PANEL LATERAL (AISLADO)
================================ */
const masonry = document.querySelector(".masonry");
const panel = document.getElementById("sidePanel");
const overlay = document.getElementById("overlay");
const content = document.getElementById("panelContent");
const closeBtn = document.getElementById("closePanel");

if (masonry && panel && overlay && content && closeBtn) {

  // EVENT DELEGATION (NO SE ROMPE CON SHUFFLE)
  masonry.addEventListener("click", e => {
    const btn = e.target.closest(".pin-action");
    if (!btn) return;

    const pin = btn.closest(".pin");
    if (!pin) return;

    content.innerHTML = `
      <img src="${pin.querySelector("img").src}"
           style="width:100%;border-radius:12px;margin-bottom:15px">
      <p>${pin.dataset.desc || ""}</p>
    `;

    panel.classList.add("open");
    overlay.classList.add("show");
  });

  const closePanel = () => {
    panel.classList.remove("open");
    overlay.classList.remove("show");
  };

  overlay.addEventListener("click", closePanel);
  closeBtn.addEventListener("click", closePanel);
}

