/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};



// * 1) удаление блоков с рекламой 

const banners = document.querySelectorAll(".promo__adv img");
    // adv = banners.querySelectorAll("img");

// console.log(adv.length);

// for (let i = 0; i < adv.length; i++) {
//     banners.remove();
// }

banners.forEach(item => {
    item.remove();                 // todo 1 способ
});

// banners.forEach(function(item) {
//     item.remove();                   // todo 2 способ
// });

// * 2) замена комедии на драму 

// const genre = document.querySelector(".promo__genre");
// genre.innerHTML = "Драма";          // todo 1 способ

const poster = document.querySelector(".promo__bg"),
        genre = poster.querySelector(".promo__genre");       // todo 2 способ
genre.innerHTML = "Драма"

// genre.textContent = "Драма" // todo или так

// * 3) замена бэкграунда 

poster.style.backgroundImage = "url(/img/bg.jpg)";  // todo 1 способ

// const img = document.querySelector(".promo__bg");
// img.style.backgroundImage = "url(/img/bg.jpg)";      // todo 2 способ

// * 4), 5) сортировка по алфавиту и нумерация 

const movieList = document.querySelector(".promo__interactive-list");
movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, num) => {
    movieList.innerHTML = movieList.innerHTML + `
        <li class="promo__interactive-item">${num+1} ${film}  
            <div class="delete"></div>
        </li>
    `; 
});

// ? для себя 

const btn = document.querySelector(".add button");
console.log(btn);

btn.textContent = "Отправить";
btn.style.backgroundColor = "orange";
btn.style.cssText = "font-size: 18px";




