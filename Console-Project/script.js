let NumberofFilms = prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
    count: NumberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько вы его оцените?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
    } else{
        i--;
    }    
}


//while
// let i = 0;
// while (i < 2){
//     i++;
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько вы его оцените?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50){
//             personalMovieDB.movies[a] = b;
//     } else{
//          i--;
//     }    
    
// }

if (personalMovieDB.count >= 10 & personalMovieDB.count < 30){
    console.log("Вы классический зритель");
}else if (personalMovieDB.count >= 30){
    console.log("Вы киноман!");
}else if(personalMovieDB.count < 10) {
    console.log("Просмотренно довольно мало фильмов");
}else{
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);