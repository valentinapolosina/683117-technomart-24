var mapPopup = document.querySelector(".map-popup");
var cartPopup = document.querySelector(".cart");
var popup = document.querySelector(".popup");

if (mapPopup) {
  var mapLink = document.querySelector(".contact-map");
  var mapClose = mapPopup.querySelector(".button-close");
  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
  mapPopup.classList.add("modal-show");
      }); 
mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
          mapPopup.classList.remove("modal-show");
      });
  
}

if (cartPopup) {
  var buyLink = document.querySelector(".button-buy");
  var buyClose = cartPopup.querySelector(".button-close");

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
  console.log(".popup");
 var link = document.querySelector(".button-letter");
 var close = popup.querySelector(".button-close");
 var login = popup.querySelector("[name=login]");
 var form = popup.querySelector("form");
 var email = popup.querySelector("[name=email]");
 var letter = popup.querySelector("[name=text-letter]");

 var isStorageSupport = true;
  var storageName = "блабла";
  var storageEmail = "блабла";
  
  try {
    storageName = localStorage.getItem("login");
    storageEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
if (storage) {
      login.value = storage;
      if (storageEmail) {
        email.value = storageEmail;
        text-letter.focus();
      } else {
        email.focus();
      }
    } else {
      login.focus();
      if (storageEmail) {
        email.value = storageEmail;
      }
    }
});

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value || !letter.value) {
      evt.preventDefault();
      console.log("Нужно ввести данные");
    }
    else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });

 window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });
}