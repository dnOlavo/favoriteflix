//JSON
const movie = {
    title: "Harry Potter",
    url: "https://caminho.com/imagem",
};

//HTML
const figure = document.createElement("figcaption"); // <figure></figure>
const img = document.createElement("img"); // <img></img>
const title = document.createElement("figcaption"); // <figcaption></figcaption>
const listBanners = document.querySelector(".list-banners");

figure.classList.add("wrapper-banner"); // <figure class="wrapper-banner"></figure>

img.src = "img/banner1.png"; // <img src="img/banner1.png">
img.alt = "Banner of the movie"; // <img src="img/banner1.png" alt="Banner of the movie">
img.classList.add("main-banner"); // <img class="main-banner" src="img/banner1.png" alt="Banner of the movie">

title.textContent = "Nome do Filme"; // <figcaption>Nome do Filme<figcaption>
title.classList.add("main-caption"); // <figcaption class="main-caption">Nome do Filme<figcaption>

/*
<figure class="wrapper-banner">
    <img class="main-banner" src="img/banner1.png" alt="Banner of the movie">
</figure>
*/
figure.insertAdjacentElement("beforeend", img);

/*
<figure class="wrapper-banner">
    <img class="main-banner" src="img/banner1.png" alt="Banner of the movie">
    <figcaption class="main-caption">Nome do Filme<figcaption>
</figure>
*/
figure.insertAdjacentElement("beforeend", title);

listBanners.insertAdjacentElement("beforeend", figure);