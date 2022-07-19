"use strict";

const navIndex = document.getElementById("nav_Index");

const liElement = document.createElement("li");
liElement.innerHTML = `<a href="../404.html" class="lnks">Pagina de Error</a>`;
navIndex.appendChild(liElement);

articlesDB.forEach(element => {

  const liElement = document.createElement("li");
  liElement.innerHTML = `<a href="../${element.link}" class="lnks">${element.nombreBlog}</a>`;
  navIndex.appendChild(liElement);
  
});