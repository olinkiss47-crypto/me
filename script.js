const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const navLinks = document.querySelectorAll('.nav a');

if (menuBtn && sidebar) {
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isMenuButton = menuBtn.contains(event.target);

    if (!isClickInsideSidebar && !isMenuButton && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
    }
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});
