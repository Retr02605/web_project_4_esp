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
profesionInput.value = profesion.textContent;

let btn = document.getElementById("boton-save");
btn.addEventListener("click", save);

function save() {
  namess.textContent = nameInput.value;
  profesion.textContent = profesionInput.value;
  openPopup();
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

let popupcreate = document.getElementById("popup_insert-card");

let openPopu = document.getElementById("btn_create");

let equi = document.getElementById("close-icon-btn");

equi.addEventListener("click", openPo);

openPopu.addEventListener("click", openPo);

function openPo() {
  if (popupcreate.classList.contains("popup_opened")) {
    popupcreate.classList.add("popup_close");
    popupcreate.classList.remove("popup_opened");
  } else {
    popupcreate.classList.add("popup_opened");
    popupcreate.classList.remove("popup_close");
  }
}

const initialCards = [
  {
    id: 1,
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    id: 2,
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    id: 3,
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    id: 4,
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    id: 5,
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    id: 6,
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

/*InitialCards.push (nuevo objeto) */

let card = document.getElementById("element-id");

function crearCards(segundo = false) {
  if (segundo == true) {
    let div = document.createElement("div");
    div.classList.add("element-card");
    div.id = initialCards[0].id;
    let deleteb = document.createElement("button");
    deleteb.classList.add("card-delete");

    deleteb.id = initialCards[0].id + "delete";
    deleteb.addEventListener("click", function (b) {
      let con = b.target.id.length;
      if (con > 7) {
        let borrar = document.getElementById(parseInt(b.target.id.slice(0, 2)));
        let borr = parseInt(b.target.id.slice(0, 2));
        
        borrar.remove(borr);
      } else {
        let borrar = document.getElementById(parseInt(b.target.id.slice(0, 1)));
        let borr = parseInt(b.target.id.slice(0, 1));
        borrar.remove(borr);
      }
    });

    let img = document.createElement("img");
    img.classList.add("card-image");
    img.src = initialCards[0].link;

    img.addEventListener("click",function(e){
      let popUpAbierto = document.getElementById("popup_insert-image")
      popUpAbierto.classList.remove("popup_close");

      document.getElementById("imagenPop").src= initialCards[0].link
      document.querySelector(".popup__title-text").textContent = initialCards[0].name

      document.getElementById("close-icon-img-btn").addEventListener("click",function(e){
        popUpAbierto.classList.add("popup_close");
      })


    });
    
    let divc = document.createElement("div");
    divc.classList.add("card-content");
    let h2 = document.createElement("h2");
    h2.classList.add("card-title");
    h2.innerText = initialCards[0].name;
    let likeb = document.createElement("button");
    likeb.classList.add("card-like");

    likeb.id = initialCards[0].id + "card_like";

    likeb.addEventListener("click", function (e) {
      
      let like = document.getElementById(e.target.id);
      
      if (like.classList.contains("card_like-active")) {
        like.classList.add("card-like");
        like.classList.remove("card_like-active");
      } else {
        like.classList.add("card_like-active");
        like.classList.remove("card-like");
      }
      
      
      
      
      img.addEventListener("click", cerra);
      let popupImag = document.getElementById("popup_insert-image");
      function cerra() {
        if (popupImag.classList.contains("popup_close")) {
          popupImag.classList.remove("popup_close");
        } else {
          popupImag.classList.add("popup_close");
        }
      }
    });

    div.appendChild(deleteb);
    div.appendChild(img);
    div.appendChild(divc);
    divc.appendChild(h2);
    divc.appendChild(likeb);

    card.prepend(div);
    
  } else {
    initialCards.map((c) => {
      let div = document.createElement("div");
      div.classList.add("element-card");
      div.id = c.id;
      let deleteb = document.createElement("button");
      deleteb.classList.add("card-delete");
      deleteb.id = c.id + "delete";
      deleteb.addEventListener("click", function (b) {
        let borrar = document.getElementById(c.id);
        borrar.remove(c.id);
      });

      let img = document.createElement("img");
      img.classList.add("card-image");
      img.src = c.link;

      img.addEventListener("click",function(e){
        let popUpAbierto = document.getElementById("popup_insert-image")
        popUpAbierto.classList.remove("popup_close");

        document.getElementById("imagenPop").src= c.link
        document.querySelector(".popup__title-text").textContent = c.name

        document.getElementById("close-icon-img-btn").addEventListener("click",function(e){
          popUpAbierto.classList.add("popup_close");
        })

  
      });

      let divc = document.createElement("div");
      divc.classList.add("card-content");
      let h2 = document.createElement("h2");
      h2.classList.add("card-title");
      h2.innerText = c.name;

      let likeb = document.createElement("button");
      likeb.classList.add("card-like");
      likeb.id = c.id + "card_like";
      likeb.addEventListener("click", function (e) {
        let like = document.getElementById(c.id + "card_like");
        if (like.classList.contains("card_like-active")) {
          like.classList.add("card-like");
          like.classList.remove("card_like-active");
        } else {
          like.classList.add("card_like-active");
          like.classList.remove("card-like");
        }
            
        
        
            img.addEventListener("click", cerra);
            function cerra() {
              if (popupImag.classList.contains("popup_close")) {
                popupImag.classList.remove("popup_close");
              } else {
                popupImag.classList.add("popup_close");
              }
      }
      });

      div.appendChild(deleteb);
      div.appendChild(img);
      div.appendChild(divc);
      divc.appendChild(h2);
      divc.appendChild(likeb);

      card.prepend(div);
      
    });
  }
}

function agregarCard() {
  let formTitulo = document.getElementById("title").value;
  let formUrl = document.getElementById("image").value;

  let id = initialCards.length + 1;
  let objetoNuevo = {
    id: id,
    name: formTitulo,
    link: formUrl,
  };
  initialCards.unshift(objetoNuevo);
  crearCards(true);
  if (popupcreate.classList.contains("popup_opened")) {
    popupcreate.classList.add("popup_close");
    popupcreate.classList.remove("popup_opened");
  } else {
    popupcreate.classList.add("popup_opened");
    popupcreate.classList.remove("popup_close");
  }
}

addEventListener("DOMContentLoaded", () => {
  crearCards();
  crearPopup();
});





let poup = document.getElementById("popup_insert-image");

