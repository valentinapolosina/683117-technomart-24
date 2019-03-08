/* карта */


 var mapLink = document.querySelector(".contact-map");
    var mapPopup = document.querySelector(".map-popup");
    var mapClose = mapPopup.querySelector(".button-close");
    mapLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapPopup.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
    });


 window.addEventListener("keydown", function (evt) {
      evt.preventDefault();
      if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
          mapPopup.classList.remove("modal-show");
        }
      }
    });

 /*добавлено*/

    var buyLink = document.querySelector(".button-buy");
    var buyPopup = document.querySelector(".cart");
    var buyClose = buyPopup.querySelector(".button-close");


    buyLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      buyPopup.classList.add("modal-show");
    });

    buyClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      buyPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (buyPopup.classList.contains("modal-show")) {
          buyClose.classList.remove("modal-show"); 
        }
      }
    });
    
 var link = document.querySelector(".button-letter");
 var popup = document.querySelector(".popup");
 var close = popup.querySelector(".button-close");
 var login = popup.querySelector("[name=login]");
 var form = popup.querySelector("form");
 var email = popup.querySelector("[name=email]");
 var letter = popup.querySelector("[name=text-letter]");

 var isStorageSupport = true;
  var storageName = "";
  var storageEmail = "";
  
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
