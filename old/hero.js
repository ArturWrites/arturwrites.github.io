"use strict";

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

const mySlider = document.getElementById("heroSlider");

function cardHeroHistoriaOriginal(){
  const heroCard = document.createElement("div");
  heroCard.className += ("heroCardContainer");
  heroCard.innerHTML = `
  <div class="heroBgCard"></div>

  <div class="heroCard">

    <div class="heroCardDesktop">

      <div class="heroSection1">
        <img src="${articlesDB[i].imagenBlog}" alt="">
        <p class="heroSinopsis">${articlesDB[i].sinopsis}</p>
      </div>

      <div class="heroSection2">
        <div class="heroTitleSection">
          <h2 class="heroTitle">${articlesDB[i].nombreBlog}</h2>
          <p class="heroDate">${articlesDB[i].fecha}</p>
        </div>
        <div class="heroInfo">
          <p>${articlesDB[i].tipo}</p>
        </div>
        <a href="${articlesDB[i].link}">Leer</a>
      </div>
    </div>

    <div class="heroCardMobile">
      <img src="${articlesDB[i].imagenBlog}" alt="">
      <h2 class="heroTitle">${articlesDB[i].nombreBlog}</h2>
      <p class="heroDate">${articlesDB[i].fecha}</p>
      <p class="heroSinopsis">${articlesDB[i].sinopsis}</p>
      <a href="${articlesDB[i].link}">Leer</a>
    </div>
  </div>
  `;

  mySlider.appendChild(heroCard);
}

function cardHeroSerie(){
  const heroCard = document.createElement("div");
  heroCard.className += ("heroCardContainer");
  heroCard.innerHTML = `
  <div class="heroBgCard"></div>

  <div class="heroCard">

    <div class="heroCardDesktop">

      <div class="heroSection1">
        <img src="${articlesDB[i].imagenBlog}" alt="">
        <p class="heroSinopsis">${articlesDB[i].sinopsis}</p>
      </div>

      <div class="heroSection2">
        <div class="heroTitleSection">
          <h2 class="heroTitle">${articlesDB[i].nombreBlog}</h2>
          <p class="heroDate">${articlesDB[i].fecha}</p>
        </div>
        <div class="heroInfo">
          <p>${articlesDB[i].titulo}</p>
          <p>${articlesDB[i].capitulo}</p>
          <p>${articlesDB[i].tiempo}</p>
        </div>
        <a href="${articlesDB[i].link}">Leer</a>
      </div>
    </div>

    <div class="heroCardMobile">
      <img src="${articlesDB[i].imagenBlog}" alt="">
      <h2 class="heroTitle">${articlesDB[i].nombreBlog}</h2>
      <p class="heroDate">${articlesDB[i].fecha}</p>
      <p class="heroSinopsis">${articlesDB[i].sinopsis}</p>
      <a href="${articlesDB[i].link}">Leer</a>
    </div>
  </div>
  `;

  mySlider.appendChild(heroCard);
}

function cardHeroPelicula(){
  const heroCard = document.createElement("div");
  heroCard.className += ("heroCardContainer");
  heroCard.innerHTML = `
  <div class="heroBgCard"></div>

  <div class="heroCard">

    <div class="heroCardDesktop">

      <div class="heroSection1">
        <img src="${articlesDB[i].imagenBlog}" alt="">
        <p class="heroSinopsis">${articlesDB[i].sinopsis}</p>
      </div>

      <div class="heroSection2">
        <div class="heroTitleSection">
          <h2 class="heroTitle">${articlesDB[i].nombreBlog}</h2>
          <p class="heroDate">${articlesDB[i].fecha}</p>
        </div>
        <div class="heroInfo">
        <p>${articlesDB[i].titulo}</p>
        <p>${articlesDB[i].tiempo}</p>
        </div>
        <a href="${articlesDB[i].link}">Leer</a>
      </div>
    </div>

    <div class="heroCardMobile">
      <img src="${articlesDB[i].imagenBlog}" alt="">
      <h2 class="heroTitle">${articlesDB[i].nombreBlog}</h2>
      <p class="heroDate">${articlesDB[i].fecha}</p>
      <p class="heroSinopsis">${articlesDB[i].sinopsis}</p>
      <a href="${articlesDB[i].link}">Leer</a>
    </div>
  </div>
  `;

  mySlider.appendChild(heroCard);
}

for (var j = 0; j < 1; j++) {

  var i = random(1, articlesDB.length);

  if (articlesDB[i].tipo == "Historia Original") {
    cardHeroHistoriaOriginal();
  }

  else if (articlesDB[i].tipo == 'Pelicula') {
    cardHeroPelicula();
  }

  else if (articlesDB[i].tipo == 'Serie') {
    cardHeroSerie();
  }

}
