"use strict";

import { navBarBuilder } from "./elementBuilder.mjs";
import { headerBuilder } from "./elementBuilder.mjs";
import { contentLibrariesBuilder } from "./elementBuilder.mjs";
import { footerBuilder } from "./elementBuilder.mjs";
import { blogFooterBuilder } from "./elementBuilder.mjs";
import { backgroundBuilder } from "./elementBuilder.mjs";
import { articleHeaderBuilder } from "./elementBuilder.mjs";
import { articleImageBuilder } from "./elementBuilder.mjs";
import { petBuilder } from "./elementBuilder.mjs";

import { generatorIndexGridCards } from "./cardsBuilder.mjs";
import { generatorHeroCards } from "./cardsBuilder.mjs";
import { generatorLibrariesGridCards } from "./cardsBuilder.mjs";
import { generatorRelatedCards } from "./cardsBuilder.mjs";
import { articleCardGenerator } from "./cardsBuilder.mjs";


//** Rutinas constructora de paginas */
navBarBuilder();
const title = document.getElementById("title");

//** Pagina de inicio */  
if (title.innerHTML == "Fox Tales") {
  headerBuilder('Fox Tales');
  contentLibrariesBuilder();
  //**Lineas que generan la grid de la págnia de inicio */
  generatorHeroCards(1);
  generatorIndexGridCards(3);
  footerBuilder();
  backgroundBuilder();
}

//** Bibioteca de Series */  
if (title.innerHTML == "Series") {
  headerBuilder('Series');
  //**Lineas que generan la grid de la bliblioteca de series */
  contentLibrariesBuilder();
  generatorLibrariesGridCards('Series');
  //**Lineas que generan el footer y el fondo que sera animado por el css */
  footerBuilder();
  backgroundBuilder();
}

//** Bibioteca de Peliculas */ 
if (title.innerHTML == "Peliculas") {
  headerBuilder('Peliculas');
  //**Lineas que generan la grid de la bliblioteca de peliculas */
  contentLibrariesBuilder();
  generatorLibrariesGridCards('Peliculas');
  //**Lineas que generan el footer y el fondo que sera animado por el css */
  footerBuilder();
  backgroundBuilder();
}

//** Bibioteca de Historias Originales */ 
if (title.innerHTML == "Historias Originales") {
  headerBuilder('Historias Originales');
  //**Lineas que generan la grid de la bliblioteca de Historias Originales */
  contentLibrariesBuilder();
  generatorLibrariesGridCards('Historias Originales');
  //**Lineas que generan el footer y el fondo que sera animado por el css */
  footerBuilder();
  backgroundBuilder();
}

//** Bibioteca General */ 
if (title.innerHTML == "Biblioteca") {
  headerBuilder('Biblioteca General');
  //**Lineas que generan la grid de la bliblioteca general */
  contentLibrariesBuilder();
  generatorLibrariesGridCards('Biblioteca');
  //**Lineas que generan el footer y el fondo que sera animado por el css */
  footerBuilder();
  backgroundBuilder();
}

//**Bloques para Blogs*/
else{
  //**Lineas que generan las tarjetas de la seccion de relacionados en todos los blogs*/
  const blogName = document.getElementById("title").innerHTML;
  generatorRelatedCards(2, blogName);
  //**Lineas que generan el footer y la pet por defecto de cada blog */
  articleHeaderBuilder();
  articleImageBuilder();
  blogFooterBuilder();
  petBuilder();
}

//*Nota: */

