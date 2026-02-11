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


document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector('.material-trigger');
  const body = document.body;

  if (!trigger) return;

  let locked = false;

  trigger.addEventListener('mouseenter', () => {
    if (!locked) body.classList.add('material-active');
  });

  trigger.addEventListener('mouseleave', () => {
    if (!locked) body.classList.remove('material-active');
  });

  trigger.addEventListener('click', () => {
    locked = !locked;
    body.classList.toggle('material-active', locked);
  });
});



  const sections = document.querySelectorAll('.section');
  const links = document.querySelectorAll('.menu a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });


  const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

document.querySelectorAll(".pin").forEach(pin => {
  pin.addEventListener("click", () => {
    const img = pin.querySelector("img");
    const desc = pin.dataset.desc || "";

    modalContent.innerHTML = `
      ${img.outerHTML}
      <div class="modal-body">
        <p>${desc}</p>
      </div>
    `;

    modal.classList.add("active");
  });
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});


document.querySelectorAll(".pin").forEach(pin => {
  pin.addEventListener("click", () => {
    const img = pin.querySelector("img").src;
    const desc = pin.dataset.desc || "";
    const link = pin.dataset.link;
    const icon = pin.dataset.icon;

    modalContent.innerHTML = `
      <img src="${img}">

      <div class="modal-body">
        <p>${desc}</p>

        ${link && icon ? `
          <a href="${link}" target="_blank" class="modal-link-icon">
            <img src="${icon}" alt="link icon">
            <span>Ver proyecto</span>
          </a>
        ` : ""}
      </div>
    `;

    modal.classList.add("active");
  });
});
