"use strict";

const header = document.getElementById("header");

header.innerHTML = `
  <h1>Fox Tales</h1>

  <input type="checkbox" class="openNavMenu" id="openNavMenu">
  <label for="openNavMenu" class="toogle_Btn">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </label>

  <nav>
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
