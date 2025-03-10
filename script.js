<script>
  // Hämta knappen
  const backToTopButton = document.getElementById('backToTop');

  // Visa/dölj knappen baserat på scrollposition
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'flex'; // Visa knappen
    } else {
      backToTopButton.style.display = 'none'; // Dölj knappen
    }
  });

  // Smooth scroll till toppen
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  });
</script>
