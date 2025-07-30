 document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const form = this;
      const button = form.querySelector('button');
      const success = document.getElementById('successMessage');

      button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
      button.disabled = true;

      setTimeout(() => {
        success.style.display = 'block';
        button.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer';
        button.disabled = false;
        form.reset();

        Swal.fire({
          title: 'Message envoyé !',
          text: 'Nous reviendrons vers vous rapidement.',
          icon: 'success',
          confirmButtonColor: '#1E3A8A'
        });
      }, 2000);
    });
    /** Fin du script contact */