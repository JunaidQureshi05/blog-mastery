function userScroll() {
  const navbar = document.querySelector(".navbar");
  if (window.innerWidth < 500) {
    navbar.classList.add("bg-dark");
    return;
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("navbar-sticky");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
