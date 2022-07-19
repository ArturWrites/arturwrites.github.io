"use strict";

const myGrid = document.getElementById("grid_articles");

function cardHistoriaOriginal(){
  const indexCard = document.createElement("div");
  indexCard.className += ("card_index");
  indexCard.innerHTML = `
    <div class="frontPageCard">
      <img src=${articlesDB[i].imagenBlog} alt="">
    </div>

    <div class="contentCard">
      <div class="headerCard">
        <h2 class="titleCard">${articlesDB[i].nombreBlog}</h2>
        <p class="dateCard">${articlesDB[i].fecha}</p>
      </div>
      <div class="infoCard">
        <p>${articlesDB[i].tipo}</p>
      </div>
      <div class="linkCard">
        <a href=${articlesDB[i].link}>Leer</a>
      </div>
    </div>

    <div class="bgContentCard"></div>
  `;
  myGrid.appendChild(indexCard);
}

function cardSerie(){
  const indexCard = document.createElement("div");
  indexCard.className += ("card_index");
  indexCard.innerHTML = `
    <div class="frontPageCard">
      <img src=${articlesDB[i].imagenBlog} alt="">
    </div>

    <div class="contentCard">
      <div class="headerCard">
        <h2 class="titleCard">${articlesDB[i].nombreBlog}</h2>
        <p class="dateCard">${articlesDB[i].fecha}</p>
      </div>
      <div class="infoCard">
        <p>${articlesDB[i].titulo}</p>
        <p>${articlesDB[i].capitulo}</p>
        <p>${articlesDB[i].tiempo}</p>
      </div>
      <div class="linkCard">
        <a href=${articlesDB[i].link}>Leer</a>
      </div>
    </div>

    <div class="bgContentCard"></div>
  `;
  myGrid.appendChild(indexCard);
}

function cardPelicula(){
  const indexCard = document.createElement("div");
  indexCard.className += ("card_index");
  indexCard.innerHTML = `
    <div class="frontPageCard">
      <img src=${articlesDB[i].imagenBlog} alt="">
    </div>

    <div class="contentCard">
      <div class="headerCard">
        <h2 class="titleCard">${articlesDB[i].nombreBlog}</h2>
        <p class="dateCard">${articlesDB[i].fecha}</p>
      </div>
      <div class="infoCard">
        <p>${articlesDB[i].titulo}</p>
        <p>${articlesDB[i].tiempo}</p>
      </div>
      <div class="linkCard">
        <a href=${articlesDB[i].link}>Leer</a>
      </div>
    </div>

    <div class="bgContentCard"></div>
  `;
  myGrid.appendChild(indexCard);

}

if (myGrid.classList.contains("home_grid")) {

  let contadorH = 0;
  let contadorS = 0;
  let contadorP = 0;

  for (var i = 0; i < articlesDB.length; i++) {

    if (articlesDB[i].tipo == "Historia Original" && contadorH < 3) {
      cardHistoriaOriginal();
      contadorH++;
    }

    else if (articlesDB[i].tipo == 'Pelicula' && contadorP < 3) {
      cardPelicula();
      contadorP++;
    }

    else if (articlesDB[i].tipo == 'Serie' && contadorS < 3) {
      cardSerie();
      contadorS++;
    }
  }
}

if (myGrid.classList.contains("series_grid")) {
  for (var i = 0; i < articlesDB.length; i++) {
    if (articlesDB[i].tipo == 'Serie') {
      cardSerie();
    }
  }
}

if (myGrid.classList.contains("peliculas_grid")) {
  for (var i = 0; i < articlesDB.length; i++) {
    if (articlesDB[i].tipo == 'Pelicula') {
      cardPelicula();
    }
  }
}

if (myGrid.classList.contains("historias_grid")) {
  for (var i = 0; i < articlesDB.length; i++) {
    if (articlesDB[i].tipo == 'Historia Original') {
      cardHistoriaOriginal();
    }
  }
}

if (myGrid.classList.contains("biblioteca_grid")) {

  for (var i = 0; i < articlesDB.length; i++) {

    if (articlesDB[i].tipo == "Historia Original") {
      cardHistoriaOriginal();
    }

    else if (articlesDB[i].tipo == 'Pelicula') {
      cardPelicula();
    }

    else if (articlesDB[i].tipo == 'Serie') {
      cardSerie();
    }
  }
}
