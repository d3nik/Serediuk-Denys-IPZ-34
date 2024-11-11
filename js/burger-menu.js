(() => {
    const refs = {
      openBurgerBtn: document.querySelector("[data-burger-open]"),
      closeBurgerBtn: document.querySelector("[data-burger-close]"),
      burger: document.querySelector("[data-burger]"),
      body: document.querySelector("body"),
    };
  
    refs.openBurgerBtn.addEventListener("click", toggleModal);
    refs.closeBurgerBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.burger.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();  