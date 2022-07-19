"use strict";

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function createCardRelated(){
  const myCardsGrid = document.getElementById("relatedGrid");
  const  cardRelated = document.createElement("div");
  cardRelated.className += ("cardRelated");
  cardRelated.innerHTML = `
  <div class="coverRelated">
  <img src="../${articlesDB[i].imagenBlog}" alt="">
  </div>
  
  <div class="cardRelatedContent">
  
  <div class="portadaRelated">
    <div class="autorRelated">
      <p>${articlesDB[i].autorBlog}</p>
    </div>
    <div class="tituloRelated">
      <h2>${articlesDB[i].nombreBlog}</h2>
      <p>${articlesDB[i].fecha}</p>
    </div>
  </div>
  
  <div class="lomoRelated">
    <h1>${articlesDB[i].nombreBlog}</h1>
  </div>
  
  <div class="contraPortadaRelated">
    <div class="sinopsisRelated">
      <p>${articlesDB[i].sinopsis}</p>
    </div>
    <div class="shareRelated icons_efects">
      <i class="fas fa-share-alt"></i>
      <i class="far fa-bell"></i>
      <i class="fas fa-coffee"></i>
      <a href="../${articlesDB[i].link}">Leer</a>
    </div>
  </div>
  
  </div>
  `;
  
  myCardsGrid.appendChild(cardRelated);
}

for (var j = 0; j < 2; j++) {

  var i = random(1, articlesDB.length);

  createCardRelated();

}


