"use strict";

import { createHeader } from "./interface.mjs";
import { generateBlogsNavbar } from "./interface.mjs";
import { createFooter } from "./interface.mjs";
import { createCardRelatedHistoriaOriginal } from "./cardsLibrary.mjs";
import { createCardRelated } from "./cardsLibrary.mjs";
import { cardHeroHistoriaOriginal } from "./cardsLibrary.mjs";
import { cardHeroSerie } from "./cardsLibrary.mjs";
import { cardHeroPelicula } from "./cardsLibrary.mjs";
import { cardGrid } from "./cardsLibrary.mjs";
import { randomIndex } from "./cardsLibrary.mjs";
import { generatorRelatedCards } from "./cardsLibrary.mjs";
import { generatorHeroCards } from "./cardsLibrary.mjs";
import { generatorIndexGridCards } from "./cardsLibrary.mjs";
import { generatorLibrariesGridCards } from "./cardsLibrary.mjs";

const title = document.getElementById("title");

if (title.innerHTML == "Fox Tales") {
  createHeader();
  generatorHeroCards(1);
  generatorIndexGridCards(3);
  generateBlogsNavbar(4);
  createFooter();
}

if (title.innerHTML =="Series") {
  createHeader();
  generatorLibrariesGridCards('Series')
  createFooter();
}

if (title.innerHTML =="Peliculas") {
  createHeader();
  generatorLibrariesGridCards('Peliculas')
  createFooter();
}

if (title.innerHTML =="Historias Originales") {
  createHeader();
  generatorLibrariesGridCards('Historias Originales')
  createFooter();
}

if (title.innerHTML =="Biblioteca") {
  createHeader();
  generatorLibrariesGridCards('Biblioteca')
  createFooter();
}
if(title.className =="blog"){
  createHeader();
  generateBlogsNavbar(4);
  createFooter();
  generatorRelatedCards(2);
}
