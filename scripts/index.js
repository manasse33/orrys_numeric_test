const modalDetail = document.getElementById("inscriptionModal");
  const closeBtnDetail = document.getElementById("closeModal");
  const formationInput = document.getElementById("formationChoisie");
  const detailChoisi= document.getElementById("detail");
  // Pour chaque bouton "Je m’inscris"
  document.querySelectorAll(".bas button").forEach(button => {
    button.addEventListener("click", () => {
      const title = button.parentElement.querySelector("h3").textContent;
       const detail = button.parentElement.querySelector("p").textContent;
      formationInput.textContent = title;
       detailChoisi.textContent = detail;
      
      modalDetail.style.display = "block";
    // alert(formationInput.textContent);
    });
  });

  // Fermer la modale
  closeBtnDetail.addEventListener("click", () => {
    modalDetail.style.display = "none";
    form.reset();
    confirmation.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modalDetail.style.display = "none";
      form.reset();
      confirmation.style.display = "none";
    }
  });