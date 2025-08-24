// Update button text when collapsed/expanded
    document.querySelectorAll('.faq-question').forEach(button => {
      button.addEventListener('click', function() {
        setTimeout(() => {
          const target = document.querySelector(this.getAttribute('data-bs-target'));
          if (target.classList.contains('show')) {
            this.classList.remove('collapsed');
          } else {
            this.classList.add('collapsed');
          }
        }, 10);
      });
    });


