/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
//1

let ads = document.querySelectorAll(".promo__adv img");

ads.forEach(item => {
    item.remove();
});

//2
let logo  = document.querySelector(".promo__genre");
logo.textContent = "Драма";

//3
let imgBackground = document.querySelector(".promo__bg");
imgBackground.style.backgroundImage = 'url("../img/bg.jpg")';

//4
let changeList = document.querySelector('.promo__interactive-list');
changeList.innerHTML = "";


const movieDB = {
    movies: [
        "Скотт Пилигрим против...",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Логан"
    ]
};
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    changeList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
})

    