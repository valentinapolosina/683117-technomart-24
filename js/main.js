const mapPopup = document.querySelector(".map-popup");
const cartPopup = document.querySelector(".cart");
const popup = document.querySelector(".popup");

if (mapPopup) {
  const mapLink = document.querySelector(".contact-map");
  const mapClose = mapPopup.querySelector(".button-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });
}

if (cartPopup) {
  const buyLink = document.querySelector(".button-buy");
  const buyClose = cartPopup.querySelector(".button-close");

  buyLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  });

  buyClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
  });

}

if (popup) {
  const form = popup.querySelector("form");

  const link = document.querySelector(".button-letter");
  const close = popup.querySelector(".button-close");

  let login = popup.querySelector("[name=login]");
  let email = popup.querySelector("[name=email]");
  let letter = popup.querySelector("[name=text-letter]");

  function setFields() {
    localStorage.setItem("login", login.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("letter", letter.value);
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.value = localStorage.getItem("login");
    email.value = localStorage.getItem("email");
    letter.value = localStorage.getItem("letter");

    if (login.value && !email.value) email.focus();
    if (login.value && email.value && !letter.value) letter.focus();
    if ((login.value && email.value && letter.value) || !login.value) login.focus();
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    setFields();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !letter.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Нужно ввести данные");
    }
    setFields();
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });
}
