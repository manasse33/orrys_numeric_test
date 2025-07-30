const buttons = document.querySelectorAll(".filters button");
    const cards = document.querySelectorAll(".formation-card");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.getAttribute("data-category");

        cards.forEach(card => {
          card.style.display = category === "all" || card.dataset.category === category
            ? "block"
            : "none";
        });
      });
    });

     const modal = document.getElementById("inscriptionModal");
  const closeBtn = document.getElementById("closeModal");
  const form = document.getElementById("preinscriptionForm");
  const formationInput = document.getElementById("formationChoisie");
  const confirmation = document.getElementById("confirmationMessage");

  // Pour chaque bouton "Je m’inscris"
  document.querySelectorAll(".formation-card button").forEach(button => {
    button.addEventListener("click", () => {
      const title = button.parentElement.querySelector("h3").textContent;
      formationInput.value = title;
      modal.style.display = "block";
    });
  });

  // Fermer la modale
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    form.reset();
    confirmation.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      form.reset();
      confirmation.style.display = "none";
    }
  });

  // Envoi du formulaire
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Simuler envoi ici (tu peux ajouter Formspree ou back-end réel plus tard)
    confirmation.style.display = "block";

    setTimeout(() => {
      form.reset();
      modal.style.display = "none";
      confirmation.style.display = "none";
    }, 2500);
  });
/** Fin du script formation*** line 62 */