(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header-mob__button"),
    closeMenuBtn: document.querySelector(".header-mob__btnclose"),
    menu: document.querySelector(".hed-mob__modal"),

    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");

    refs.body.classList.toggle("no-scroll");
  }
})();
