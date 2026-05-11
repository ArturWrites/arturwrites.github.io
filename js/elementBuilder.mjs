"use strict";

import { articlesDB } from "./articlesdb.mjs";

//** Script con los constructores de elmentos */

export function navBarBuilder(){
  const navBar = document.getElementById("nav_Bar");
  const navBarContent = `
        <ul class="nav_Links" id="nav_Links">

          <li class="li_Logo" id="li_Logo"">
            <a href="../index.html">
              <img src="https://lh3.googleusercontent.com/Tq5Bh9wSi_0W0xQQIYQ8249RkNQUZR5BUr8c5zGacS7TEyUkiDadaLVVfYHx4fmJLaXsLPu3blU1AWLRMyE-HludURf1kDMwREBqocoDrGfwJWC5HHl674qr7QSjaHclVSVcs_4q=s250-p-k" alt="">
            </a>
          </li>
          
          <li class="li_Home" id="li_Home">
            <a href="../index.html">
              <img src="https://lh3.googleusercontent.com/pw/AP1GczOQEITIevAFMDZZVjeko9l0q1svVE5eNk1cjisevgZW1vFaVKZivgm0tMGHFEt0BerfP2nttAz2TN8ap-Jh_47IuRgLJ-eSrfbiYmNfqGjMVcl5qQc=w2400" alt="">
            </a>  
          </li>

          <li class="li_Series" id="li_Series"">
            <a href="../series.html">
              <img src="https://lh3.googleusercontent.com/pw/AP1GczPLyqcV7cQ4q1Bznl_OTDkkDAMht5SG7Yvq9rBHXeaHZdQ3dvXBSuVrjgQVzVG6PJys_gX8UW-j1X14b7SDca8gX7cjUznBRWtoFfudmHwLRe7vc7w=w2400" alt="">
            </a>
          </li>

          <li class="li_Peliculas" id="li_Peliculas">
            <a href="../peliculas.html">
              <img src="https://lh3.googleusercontent.com/pw/AP1GczPcXeF_n7FiW5AyBkYj2bXMwLXF3LN_Ws0Th8PThRYFw92SO6_znNsAK3zrme1Fsug1g0QyRCLO_dWIPmRcVDMMOzxDmBkzYCdDAWWcaA_SqSx1F8Y=w2400" alt="">
            </a>
          </li>

          <li class="li_Historias_Originales" id="li_Historias_Originales">
            <a href="../historias_originales.html">
              <img src="https://lh3.googleusercontent.com/pw/AP1GczMhOoBK-UO-LgICDIZGU_GDr0orrbnD7j7I1X2-oHbRZ8DTOd7jaR4RVCcI2OceV_AaUjjmqXKGfzo5azWZ1cYC1Im9zjgtF8azNYOh5RU_JsUlSAc=w2400" alt="">
            </a>
          </li>

          <li class="li_Biblioteca" id="li_Biblioteca">
            <a href="../biblioteca.html">
              <img src="https://lh3.googleusercontent.com/pw/AP1GczPTT7MF3bKYMr6IYMMjqbTfu3po_eNeE2rsf1XN8VFjmzEuBErEGnQMHXgVid90c8nqKSz_oZp5r4teKvj24M-0L9Uo1IufFzZLpk75pM8mYxELEs0=w2400" alt="">
            </a>
          </li>

          <li class="li_Settings" id="li_Settings">
            <a href="">
              <img src="https://lh3.googleusercontent.com/pw/AP1GczNz-UnQIaT_SuCU_K_J4KU4srGbx_okhUTM0YjXjQ-n0V9xjl0JjJohPO8G7J8EEzv1TX8ENa3Qxp9Q4ko5MgaADU9XeM8rOMCcynO9D99-nvwCA6s=w2400" alt="">
            </a>
          </li>
          
        </ul>
  `;
  navBar.insertAdjacentHTML("beforeend", navBarContent);
}

export function headerBuilder(headerText){
  const header = document.getElementById("inner-warapper");
  const headerContent = `
    <header class="header" id="header">
      <h1>${headerText}</h1>
      <hr>
    </header>
  `;
  header.insertAdjacentHTML("beforeend", headerContent);
}

export function contentLibrariesBuilder(){
  const contentLibrary = document.getElementById("inner-warapper");
  const libraryContent = `
    <div class="content" id="content">
      <div class="heroSlider" id="heroSlider"></div>
      <div class="articles_Grid" id="grid_articles"></div>
    </div>
  `;
  contentLibrary.insertAdjacentHTML("beforeend", libraryContent);
}

export function footerBuilder(){
  const footer = document.getElementById("inner-warapper");
  const footerContent= `
    <footer class="footer" id="footer">
      <i class="fa-solid fa-share-nodes"></i>
      <h3>Gracias por compartir o <br> invitarme un café</h3>
      <h3>!Gracias por leer!</h3>
      <i class="fa-solid fa-mug-saucer"></i>
    </footer> 
  `;
  footer.insertAdjacentHTML("beforeend", footerContent);
}

export function blogFooterBuilder(){
  const footer = document.getElementById("page_Default");
  const footerContent= `
    <footer class="footer" id="footer">
      <h3>Gracias por compartir o invitarme un café</h3>
      <h3>!Gracias por leer!</h3>
      <i class="fa-solid fa-mug-saucer"></i>
      <i class="fa-solid fa-share-nodes"></i>
    </footer> 
  `;
  footer.insertAdjacentHTML("beforeend", footerContent);
}

export function backgroundBuilder(){
  const background = document.getElementById("inner-warapper");
  const backgroundContent = `
    <div class="inner_background" id="inner_background">
      <div class="bacground_layer_1" id="bacground_layer_1"></div>
      <div class="bacground_layer_2" id="bacground_layer_2"></div>
      <div class="bacground_layer_3" id="bacground_layer_3"></div>
      <div class="bacground_layer_4" id="bacground_layer_4"></div>
      <div class="bacground_layer_5" id="bacground_layer_5"></div>
      <div class="bacground_layer_6" id="bacground_layer_6"></div>
      <div class="bacground_layer_7" id="bacground_layer_7"></div>
    </div>
  `;
  background.insertAdjacentHTML("beforeend", backgroundContent);
}

export function petBuilder(){
  const pet = document.getElementById("pet_Default");
  const petContent = `
    <div class="pet_container">
      <img src="https://lh3.googleusercontent.com/pw/AP1GczOppNiveXm_Ob820GgizrqIrJVUgitnyuTPYk1woSJSEtqBC6RSaLOdQ6jOZoB6UBT2Jg3Dyh_IYOeqWmyyrtPYp_QCF6Zz3Ur-ove6_UrPbZfQI9U=w2400" alt="">
    </div>
  `;
  pet.insertAdjacentHTML("beforeend", petContent);
}

export function articleFinder(nombre_blog){
  
  for (var blog_dbNumber = 0; blog_dbNumber < articlesDB.length; blog_dbNumber++) {
    if (articlesDB[blog_dbNumber].nombreBlog == nombre_blog) {
      return blog_dbNumber;
    };
  };
}

export function articleHeaderBuilder(){
  const BlogName = document.getElementById("title");
  const indexArticle = articleFinder(BlogName.textContent);
  const articleHeader = document.getElementById("article_content");
  
  if (articlesDB[indexArticle].tipo == "Pelicula"){
    const articleHeaderContent = `
    <div class="article_Header" id="article_Header">

      <h1 class="titulo">${articlesDB[indexArticle].nombreBlog}</h1>
      <h2 class="fecha">${articlesDB[indexArticle].fecha}</h2>
      <p class="info_cap">${articlesDB[indexArticle].tipo}: ${articlesDB[indexArticle].titulo}</p>
      <p class="info_cap">${articlesDB[indexArticle].tiempo}</p>

    </div>
    `;
    articleHeader.insertAdjacentHTML("afterbegin", articleHeaderContent);
  };

  if (articlesDB[indexArticle].tipo == "Serie"){
    const articleHeaderContent = `
    <div class="article_Header" id="article_Header">

      <h1 class="titulo">${articlesDB[indexArticle].nombreBlog}</h1>
      <h2 class="fecha">${articlesDB[indexArticle].fecha}</h2>
      <p class="info_cap">${articlesDB[indexArticle].tipo}: ${articlesDB[indexArticle].titulo}</p>
      <p class="info_cap">${articlesDB[indexArticle].capitulo}</p>
      <p class="info_cap">${articlesDB[indexArticle].tiempo}</p>

    </div>
    `;
    articleHeader.insertAdjacentHTML("afterbegin", articleHeaderContent);
  };

  if (articlesDB[indexArticle].tipo == "Historia Original"){
    const articleHeaderContent = `
    <div class="article_Header" id="article_Header">

      <h1 class="titulo">${articlesDB[indexArticle].nombreBlog}</h1>
      <h2 class="fecha">${articlesDB[indexArticle].fecha}</h2>
      <p class="info_cap">${articlesDB[indexArticle].tipo}</p>

    </div>
    `;
    articleHeader.insertAdjacentHTML("afterbegin", articleHeaderContent);
  };  
}

export function articleImageBuilder(){
  const BlogName = document.getElementById("title");
  const indexArticle = articleFinder(BlogName.textContent);
  const articleImage = document.getElementById("article_Text");
  const articleImageContent = `
    <div class="img_container">
      <img src=${articlesDB[indexArticle].imagenBlog} alt="">
    </div>
  `;
  articleImage.insertAdjacentHTML("beforeend", articleImageContent);
}
