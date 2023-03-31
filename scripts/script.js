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

let likeTwo = document.getElementById("heart-like-two");
likeTwo.addEventListener("click", activeTwo);

function activeTwo() {
    if (likeTwo.classList.contains("card_like-active")) {
      likeTwo.classList.add("card-like");
      likeTwo.classList.remove("card_like-active");
    } else {
      likeTwo.classList.add("card_like-active");
      likeTwo.classList.remove("card-like");
    }
}

let likeThree = document.getElementById("heart-like-three");
likeThree.addEventListener("click", activeThree);

function activeThree() {
    if (likeThree.classList.contains("card_like-active")) {
      likeThree.classList.add("card-like");
      likeThree.classList.remove("card_like-active");
    } else {
      likeThree.classList.add("card_like-active");
      likeThree.classList.remove("card-like");
    }
}

let likefour = document.getElementById("heart-like-four");
likefour.addEventListener("click", activeFour);

function activeFour() {
    if (likefour.classList.contains("card_like-active")) {
      likefour.classList.add("card-like");
      likefour.classList.remove("card_like-active");
    } else {
      likefour.classList.add("card_like-active");
      likefour.classList.remove("card-like");
    }
}

let likefive = document.getElementById("heart-like-five");
likefive.addEventListener("click", activeFive);

function activeFive() {
    if (likefive.classList.contains("card_like-active")) {
      likefive.classList.add("card-like");
      likefive.classList.remove("card_like-active");
    } else {
      likefive.classList.add("card_like-active");
      likefive.classList.remove("card-like");
    }
}

let likesix = document.getElementById("heart-like-six");
likesix.addEventListener("click", activeSix);

function activeSix() {
    if (likesix.classList.contains("card_like-active")) {
      likesix.classList.add("card-like");
      likesix.classList.remove("card_like-active");
    } else {
      likesix.classList.add("card_like-active");
      likesix.classList.remove("card-like");
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
