let popupText = document.getElementById("edit-profile-form");

let openPop = document.getElementById("btn_edit");

openPop.addEventListener("click", openPopup);

let equis = document.getElementById("close-icon");

equis.addEventListener("click", openPopup);

let namess = document.getElementById("names");
let profesion = document.getElementById("profesion");

let nameInput = document.getElementById("name");
let profesionInput = document.getElementById("about-me");

nameInput.value = namess.textContent;
profesionInput.value = profesion.textContent

let btn= document.getElementById('boton-save')
btn.addEventListener("click", save);

let like = document.getElementById("heart-like");
like.addEventListener("click", active);

function active() {
    if (like.classList.contains("card_like-active")) {
      like.classList.add("card-like");
      like.classList.remove("card_like-active");
    } else {
      like.classList.add("card_like-active");
      like.classList.remove("card-like");
    }
}
function save() {
    namess.textContent = nameInput.value;
    profesion.textContent=profesionInput.value
    openPopup()
}

function openPopup() {
    if (popupText.classList.contains("popup_opened")) {
      popupText.classList.add("popup_close");
      popupText.classList.remove("popup_opened");
    } else {
      popupText.classList.add("popup_opened");
      popupText.classList.remove("popup_close");
    }
  }
