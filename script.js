document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".gallery .card");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector("#lightbox .close");

    // Apri lightbox al click
    cards.forEach(card => {
        const img = card.querySelector("img");
        card.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src; // mostra solo immagine (senza testo)
        });
    });

    // Chiudi lightbox con X
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Chiudi cliccando fuori dall’immagine
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});

// Pulsante torna su
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("backToTop");

  if (btn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btn.style.display = "block";
        btn.style.opacity = "1";
      } else {
        btn.style.opacity = "0";
        setTimeout(() => {
          if (window.scrollY <= 200) btn.style.display = "none";
        }, 300); // attende la transizione
      }
    });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("booking-form");
//   const checkBtn = document.getElementById("check");
//   const statusEl = document.getElementById("status");

//   if (form && checkBtn) {
//     checkBtn.addEventListener("click", () => {
//       const date = form.elements["date"].value;
//       const time = form.elements["time"].value;
//       const party = form.elements["party"].value;

//       if (!date || !time || !party) {
//         statusEl.textContent = "Compila data, ora e numero persone.";
//         return;
//       }

//       fetch(`http://localhost:3000/api/availability?date=${date}&time=${time}&partySize=${party}`)
//         .then(r => r.json())
//         .then(data => {
//           console.log(data); // per debug
//           statusEl.textContent = "Disponibilità caricata, ora puoi scegliere un tavolo.";
//           // Qui dopo devo aggiungere la logica per colorare la piantina
//         })
//         .catch(err => {
//           statusEl.textContent = "Errore nel controllo disponibilità.";
//           console.error(err);
//         });
//     });
//   }
// });
