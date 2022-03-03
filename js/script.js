// * Практика 1 

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener("DOMContentLoaded", () => {

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

    // banners.forEach(function(item) {
    //     item.remove();                   // todo 2 способ
    // });
    
    // * 2) замена комедии на драму 
    
    // const genre = document.querySelector(".promo__genre");
    // genre.innerHTML = "Драма";          // todo 1 способ
    
    const poster = document.querySelector(".promo__bg"),
            genre = poster.querySelector(".promo__genre");       // todo 2 способ
    
    // * 3) замена бэкграунда 
    
    // const img = document.querySelector(".promo__bg");
    // img.style.backgroundImage = "url(/img/bg.jpg)";      // todo 2 способ
    
    // * 4), 5) сортировка по алфавиту и нумерация 
    
    const movieList = document.querySelector(".promo__interactive-list");
    
    // ? для себя 
    
    // const btn = document.querySelector(".add button");
    // console.log(btn);
    
    // btn.textContent = "Отправить";
    // btn.style.backgroundColor = "orange";
    // btn.style.cssText = "font-size: 18px";
    
    
    // * Практика 2
    
    const addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    addCheckbox = addForm.querySelector("[type='checkbox']"),
    addBtn = addForm.querySelector("button");


    addForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = addCheckbox.checked;

        
        
        if (newFilm != "") {

            if (newFilm.length >= 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite == true) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
                sortArr(movieDB.movies);
                createMovieList(movieDB.movies, movieList);
        }
        
        event.target.reset();
        
    });

    function createMovieList(films, parent) {

        parent.innerHTML = "";
        sortArr(movieDB.movies);
        
        films.forEach((film, num) => {

            parent.innerHTML += `
                <li class="promo__interactive-item">${num+1} ${film}  
                    <div class="delete"></div>
                </li>
            `; 
        });

        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent); 
            });
        });
    }


    const makeChanges = () => {

        genre.textContent = "Драма";

        poster.style.backgroundImage = "url(/img/bg.jpg)";
    };


    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();                
        });
    };


    const sortArr = (arr) => {
        arr.sort();
    };


    createMovieList(movieDB.movies, movieList);
    makeChanges();
    deleteAdv(banners);


});

