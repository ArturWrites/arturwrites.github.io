"use strict";

import { articlesDB } from "./articlesdb.mjs";
import { randomIndex } from "./cardsLibrary.mjs";

//+Header Navbar
export function createHeader() {
  const header = document.getElementById("header");

  header.innerHTML = `
    <a href="/index.html" class="logo">
    <img src="https://lh3.googleusercontent.com/CqPP-lvbbQZsA6AC6zIfYBtmUN8H_diggvLmFf-uXNKNZsoWabgnKG8jusYxczKVw48KmBGBjShqoZt3ofKkuwTLOuWSqpaf6KHchg3864slS6hWPT9451BiOf9YA6gFgUuE78dy=s250-p-k" alt="">
    <h1>Fox Tales</h1>
    </a>

    <input type="checkbox" class="openNavMenu" id="openNavMenu">
    <label for="openNavMenu" class="toogle_Btn">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>

    <nav class="headerNav">
        <ul>
          <li id="liHome"><a href="../index.html">Home</a></li>
          <li id="liSeries"><a href="../series.html">Series</a></li>
          <li id="liPeliculas"><a href="../peliculas.html">Peliculas</a></li>
          <li id="liHistoriasOriginales"><a href="../historias_originales.html">Historias Originales</a></li>
          <li id="liBiblioteca"><a href="../Biblioteca.html">Biblioteca</a></li>
        </ul>
    </nav>
  `;

  const title = document.getElementById("title");

  if (title.innerHTML =="Fox Tales") {
    let liSelected = document.getElementById("liHome");
    liSelected.innerHTML = `<a href="../index.html"><span>Home</span></a>`
  }

  if (title.innerHTML =="Series") {
    let liSelected = document.getElementById("liSeries");
    liSelected.innerHTML = `<a href="../series.html"><span>Series</span></a>`
  }

  if (title.innerHTML =="Peliculas") {
    let liSelected = document.getElementById("liPeliculas");
    liSelected.innerHTML = `<a href="../peliculas.html"><span>Peliculas</span></a>`
  }

  if (title.innerHTML =="Historias Originales") {
    let liSelected = document.getElementById("liHistoriasOriginales");
    liSelected.innerHTML = `<a href="../historias_originales.html"><span>Historias Originales</span></a>`
  }

  if (title.innerHTML =="Biblioteca") {
    let liSelected = document.getElementById("liBiblioteca");
    liSelected.innerHTML = `<a href="../Biblioteca.html"><span>Biblioteca</span></a>`
  }
}

///+Aside NavBar

export function generateBlogsNavbar(linksNumber){
  const navIndex = document.getElementById("nav_Index");

  const liElement2 = document.createElement("li");
  liElement2.innerHTML = `<h2>Mas Recomendaciones </h2>`;
  navIndex.appendChild(liElement2);

  const liElement = document.createElement("li");
  liElement.innerHTML = `<a href="../404.html" class="lnks">Pagina de Error</a>`;
  navIndex.appendChild(liElement);

  for (let linksCount = 0; linksCount < linksNumber; linksCount++) {
    var indexArticle = randomIndex(1, articlesDB.length);
    const liElement = document.createElement("li");
    liElement.innerHTML = `<a href="../${articlesDB[indexArticle].link}" class="lnks">${articlesDB[indexArticle].nombreBlog}</a>`;
    navIndex.appendChild(liElement);
  }

}

//+Footer
export function createFooter(){
  const footer = document.getElementById("footer");
  footer.innerHTML = `
  <p class="footer_Coffe">Gracias por compartir o por invitarme un cafe</p>
  <div class="footer_Share">
    <a href=""><i class="fas fa-share-alt"></i></a>
    <a href=""><i class="fas fa-coffee"></i></a>
  </div>
  <p class="footer_Thanks">¡Gracias por leer!</p>

  `;
}