"use strict";

import { articlesDB } from "./articlesdb.mjs";

//--> Functios to create Cards <--/

//---> Article Card Generator Function <---/
export function articleCardGenerator(indexArticle, myCardsGrid, cardType){
  const  articleCard = document.createElement("div");
  articleCard.className += ("articleCardContainer");
  articleCard.innerHTML = `
      <div id="articleCardImage" class="articleCardImage">
        <img src="${articlesDB[indexArticle].imagenBlog} " alt="">
      </div>
    
      <div class="articleCardContent">
        <div class="articleCardHeader">
          <h2 class="articleCardTitle">${articlesDB[indexArticle].nombreBlog}</h2>
          <p class="articleCardDate">${articlesDB[indexArticle].fecha}</p>
        </div>
        <div class="articleCardInfo">
          <p>${articlesDB[indexArticle].tipo}</p>
        </div>
        <div class="articleCardLinks">
          <a href=""><i class="fas fa-share-alt"></i></a>
          <a href="${articlesDB[indexArticle].link}">Leer</a>
        </div>
      </div>
    
      <div id="articleCardBg" class="articleCardBg"></div>
      `;
  //? Creamos una variable temporarl donde seleccionamos el elemento por id para agregar la clase que dara el estilo al borde y a la sombra de la tarjeta de los elementos img y bacground, no es necesario hacer nadamas para que esta clase se agrege a la variable que almacena la tarjeta final (articleCard)
  if(cardType=="Historia Original"){
    const addShadowclassImg = articleCard.querySelector('#articleCardImage');
    addShadowclassImg.classList.add('articleCardHOStyleImg');
    const addShadowclassBg = articleCard.querySelector('#articleCardBg');
    addShadowclassBg.classList.add('articleCardHOStyle');
  }

  if(cardType=="Serie"){
    const addShadowclassImg = articleCard.querySelector('#articleCardImage');
    addShadowclassImg.classList.add('articleCardSerieStyleImg');
    const addShadowclassBg = articleCard.querySelector('#articleCardBg');
    addShadowclassBg.classList.add('articleCardSerieStyle');
  }

    if(cardType=="Pelicula"){
    const addShadowclassImg = articleCard.querySelector('#articleCardImage');
    addShadowclassImg.classList.add('articleCardPeliculaStyleImg');
    const addShadowclassBg = articleCard.querySelector('#articleCardBg');
    addShadowclassBg.classList.add('articleCardPeliculaStyle');
  }

  myCardsGrid.appendChild(articleCard);
}

//---> Hero Card Generator Function <---/
//*Historia Original Hero Card*/
export function cardHeroHistoriaOriginal(indexArticle, mySlider){
  const heroCard = document.createElement("div");
  heroCard.className += ("heroCardContainer");
  heroCard.innerHTML = `
  <div class="heroBgCard heroCardHOStyle"></div>

  <div class="heroCardContent">

    <section class="heroCardDesktopContent">

      <section class="heroCardDesktopSection1 heroCardHOStyleImg">
        <img src="${articlesDB[indexArticle].imagenBlog}" alt="">
        <p class="heroCardSinopsis">${articlesDB[indexArticle].sinopsis}</p>
      </section>

      <section class="heroCardDesktopSection2">
        <section class="heroCardDesktopTitleSection">
          <h2 class="heroCardTitle">${articlesDB[indexArticle].nombreBlog}</h2>
          <p class="heroCardDate">${articlesDB[indexArticle].fecha}</p>
        </section>
        <section class="heroCardDesktopInfoSection">
          <p>${articlesDB[indexArticle].tipo}</p>
        </section>
        <section class="heroCardLinks">
          <a href=""><i class="fas fa-share-alt"></i></a>
          <a href="${articlesDB[indexArticle].link}">Leer</a>
        </section>
      </section>
    
    </section>

    <section class="heroCardMobileContent heroCardHOStyleImg">
      <img src="${articlesDB[indexArticle].imagenBlog}" alt="">
      <h2 class="heroCardTitle">${articlesDB[indexArticle].nombreBlog}</h2>
      <p class="heroCardDate">${articlesDB[indexArticle].fecha}</p>
      <p class="heroCardSinopsis">${articlesDB[indexArticle].sinopsis}</p>
      <section class="heroCardLinks">
        <a href=""><i class="fas fa-share-alt"></i></a>
        <a href="${articlesDB[indexArticle].link}">Leer</a>
      </section>
    </section>
    
  </div>
  `;

  mySlider.appendChild(heroCard);
}
//*Serie Hero Card*/
export function cardHeroSerie(indexArticle, mySlider){
  const heroCard = document.createElement("div");
  heroCard.className += ("heroCardContainer");
  heroCard.innerHTML = `
  <div class="heroBgCard heroCardSerieStyle"></div>

  <div class="heroCardContent">

    <section class="heroCardDesktopContent">

      <section class="heroCardDesktopSection1 heroCardSerieStyleImg">
        <img src="${articlesDB[indexArticle].imagenBlog}" alt="">
        <p class="heroCardSinopsis">${articlesDB[indexArticle].sinopsis}</p>
      </section>

      <section class="heroCardDesktopSection2">
        <section class="heroCardDesktopTitleSection">
          <h2 class="heroCardTitle">${articlesDB[indexArticle].nombreBlog}</h2>
          <p class="heroCardDate">${articlesDB[indexArticle].fecha}</p>
        </section>
        <section class="heroCardDesktopInfoSection">
          <p>${articlesDB[indexArticle].titulo}</p>
          <p>${articlesDB[indexArticle].capitulo}</p>
          <p>${articlesDB[indexArticle].tiempo}</p>
        </section>
        <section class="heroCardLinks">
          <a href=""><i class="fas fa-share-alt"></i></a>
          <a href="${articlesDB[indexArticle].link}">Leer</a>
        </section>
      </section>
    
    </section>

    <section class="heroCardMobileContent heroCardSerieStyleImg">
      <img src="${articlesDB[indexArticle].imagenBlog}" alt="">
      <h2 class="heroCardTitle">${articlesDB[indexArticle].nombreBlog}</h2>
      <p class="heroCardDate">${articlesDB[indexArticle].fecha}</p>
      <p class="heroCardSinopsis">${articlesDB[indexArticle].sinopsis}</p>
      <section class="heroCardLinks">
        <a href=""><i class="fas fa-share-alt"></i></a>
        <a href="${articlesDB[indexArticle].link}">Leer</a>
      </section>
    </section>
    
  </div>
  `;

  mySlider.appendChild(heroCard);
}
//*Pelicula Hero Card*/
export function cardHeroPelicula(indexArticle, mySlider){
  const heroCard = document.createElement("div");
  heroCard.className += ("heroCardContainer");
  heroCard.innerHTML = `
  <div class="heroBgCard heroCardPeliculaStyle"></div>

  <div class="heroCardContent">

    <section class="heroCardDesktopContent">

      <section class="heroCardDesktopSection1 heroCardPeliculaStyleImg">
        <img src="${articlesDB[indexArticle].imagenBlog}" alt="">
        <p class="heroCardSinopsis">${articlesDB[indexArticle].sinopsis}</p>
      </section>

      <section class="heroCardDesktopSection2">
        <section class="heroCardDesktopTitleSection">
          <h2 class="heroCardTitle">${articlesDB[indexArticle].nombreBlog}</h2>
          <p class="heroCardDate">${articlesDB[indexArticle].fecha}</p>
        </section>
        <section class="heroCardDesktopInfoSection">
          <p>${articlesDB[indexArticle].titulo}</p>
          <p>${articlesDB[indexArticle].tiempo}</p>
        </section>
        <section class="heroCardLinks">
          <a href=""><i class="fas fa-share-alt"></i></a>
          <a href="${articlesDB[indexArticle].link}">Leer</a>
        </section>
      </section>
    
    </section>

    <section class="heroCardMobileContent heroCardPeliculaStyleImg">
      <img src="${articlesDB[indexArticle].imagenBlog}" alt="">
      <h2 class="heroCardTitle">${articlesDB[indexArticle].nombreBlog}</h2>
      <p class="heroCardDate">${articlesDB[indexArticle].fecha}</p>
      <p class="heroCardSinopsis">${articlesDB[indexArticle].sinopsis}</p>
      <section class="heroCardLinks">
        <a href=""><i class="fas fa-share-alt"></i></a>
        <a href="${articlesDB[indexArticle].link}">Leer</a>
      </section>
    </section>
    
  </div>
  `;

  mySlider.appendChild(heroCard);
}

//--> Functios to create Grids Cards <--/

//---> Random Index Generator <---/
export function randomIndex(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function indexFinder(relatedArticlesList){
  const relatedIndexList = [];
  for (var i = 0; i < relatedArticlesList.length; i++){
    for( var j = 0; j < articlesDB.length; j++){
      if(relatedArticlesList[i] == articlesDB[j].nombreBlog){
        relatedIndexList.push(j);
      };
    };
  };
  return relatedIndexList;
};

//---> Hero Cards Generator <---/
export function generatorHeroCards(cardsNumber) {

  const mySlider = document.getElementById("heroSlider");
  
  for (var i = 0; i < cardsNumber; i++) {

    var indexArticle = randomIndex(0, articlesDB.length);
    if (articlesDB[indexArticle].tipo == "Historia Original") {
      cardHeroHistoriaOriginal(indexArticle, mySlider);
    }

    else if (articlesDB[indexArticle].tipo == 'Serie') {
      cardHeroSerie(indexArticle, mySlider);
    }
  
    else if (articlesDB[indexArticle].tipo == 'Pelicula') {
      cardHeroPelicula(indexArticle, mySlider);
    }
  
  }
}

//---> Index Grid Cards Generator <---/
export function generatorIndexGridCards(cardsNumber){

  const myGrid = document.getElementById("grid_articles");

  let contadorH = 0;
  let contadorS = 0;
  let contadorP = 0;
  
  for (var i = 0; i < articlesDB.length; i++) {
  
     if (articlesDB[i].tipo == "Historia Original" && contadorH < cardsNumber) {
      articleCardGenerator(i, myGrid, articlesDB[i].tipo);
      contadorH++;
    }
  
     else if (articlesDB[i].tipo == 'Pelicula' && contadorP < cardsNumber) {
      articleCardGenerator(i, myGrid, articlesDB[i].tipo);
      contadorP++;
     }
  
     else if (articlesDB[i].tipo == 'Serie' && contadorS < cardsNumber) {
       articleCardGenerator(i, myGrid, articlesDB[i].tipo);
       contadorS++;
     }
   }
}

//---> Libraries Grid Cards Generator <---/
export function generatorLibrariesGridCards(libraryType) {

  const myGrid = document.getElementById("grid_articles");

  if (libraryType == "Historias Originales") {
    for (var indexArticle = 0; indexArticle < articlesDB.length; indexArticle++) {
      if (articlesDB[indexArticle].tipo == 'Historia Original') {
        articleCardGenerator(indexArticle, myGrid, articlesDB[indexArticle].tipo);
      }
    }
  }

  if (libraryType == "Peliculas") {
    for (var indexArticle = 0; indexArticle < articlesDB.length; indexArticle++) {
      if (articlesDB[indexArticle].tipo == 'Pelicula') {
        articleCardGenerator(indexArticle, myGrid, articlesDB[indexArticle].tipo);
      }
    }
  }

  if (libraryType == "Series") {
    for (var indexArticle = 0; indexArticle < articlesDB.length; indexArticle++) {
      if (articlesDB[indexArticle].tipo == 'Serie') {
        articleCardGenerator(indexArticle, myGrid, articlesDB[indexArticle].tipo);
      }
    }
  }

  if (libraryType == 'Biblioteca') {
    for (var indexArticle = 0; indexArticle < articlesDB.length; indexArticle++) {
  
      if (articlesDB[indexArticle].tipo == "Historia Original") {
        articleCardGenerator(indexArticle, myGrid, articlesDB[indexArticle].tipo);
      }
  
      else if (articlesDB[indexArticle].tipo == 'Pelicula') {
        articleCardGenerator(indexArticle, myGrid, articlesDB[indexArticle].tipo);
      }
  
      else if (articlesDB[indexArticle].tipo == 'Serie') {
        articleCardGenerator(indexArticle, myGrid, articlesDB[indexArticle].tipo);
      }
    }
  }
}

//---> Related Cards Generator <---/

//TODO: Bug al introducir el indice del ultimo articulo de la base de datos, Tambien impacta en el aside de recomendaciones y probablemente tmb en el hero card generator*/
export function generatorRelatedCards(cardsNumber, blogName) {
  
  const articleName = blogName;
  const myCardsGrid = document.getElementById("relatedGrid");
  const blogFound = false;

  for (var i = 0; i < articlesDB.length; i++){
    
    if(articlesDB[i].nombreBlog === articleName){
      
      blogFound == true;
      const relatedArticlesList = articlesDB[i].relacionado;
      const relatedIndexList = indexFinder(relatedArticlesList);

      if(relatedIndexList.length == 0){
        for(var elementsNumber = 0; elementsNumber < cardsNumber; elementsNumber++){
          var indexArticle = randomIndex(0, articlesDB.length);
          articleCardGenerator(indexArticle, myCardsGrid, articlesDB[indexArticle].tipo);
        }
        return;
      }

      if(relatedIndexList.length == 1){
        articleCardGenerator(relatedIndexList[0], myCardsGrid, articlesDB[relatedIndexList[0]].tipo);
        for(var elementsNumber = 1; elementsNumber < cardsNumber; elementsNumber++){
          var indexArticle = randomIndex(0, articlesDB.length);
          articleCardGenerator(indexArticle, myCardsGrid, articlesDB[indexArticle].tipo);
        }

      }

      if(relatedIndexList.length > 1){
          var indexArticle = randomIndex(0, articlesDB.length);
          articleCardGenerator(indexArticle, myCardsGrid, articlesDB[indexArticle].tipo);
          for(var elementsNumber = 1; elementsNumber < cardsNumber; elementsNumber++){
          var indexArticles = randomIndex(0, relatedIndexList.length);
          articleCardGenerator(relatedIndexList[indexArticles], myCardsGrid, articlesDB[relatedIndexList[indexArticles]].tipo);
        }
      }
      return;
    }

  }

  if (!blogFound){ 
    for (var i = 0; i < cardsNumber; i++) {
      var indexArticle = randomIndex(0, articlesDB.length);
      articleCardGenerator(indexArticle, myCardsGrid, articlesDB[indexArticle].tipo);
    }
    return;
  }
}