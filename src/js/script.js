"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false   
};

const a = prompt('Один из посл. фильм', ''),
      b = prompt('Оценка ', ''),
      c = prompt('Один из посл. фильм', ''),
      d = prompt('Оценка ', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


// alert(5);
// const result = confirm("are you here");
// console.log(result);
// const answer = prompt("How old are you", "18");
// console.log(answer);
// const answers = [];
// answers[0] = prompt('Как ваше имя', '');
// answers[1] = prompt('Как ваше фамилия', '');
// answers[2] = prompt('Как ваше лет', '');
// document.write(answers);