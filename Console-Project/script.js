'use srict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');

    while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
      }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько вы его оцените?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
            } else{
                i--;
            }    
        }
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count >= 10 & personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        }else if (personalMovieDB.count >= 30){
            console.log("Вы киноман!");
        }else if(personalMovieDB.count < 10) {
            console.log("Просмотренно довольно мало фильмов");
        }else{
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function() {
        if( personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++){
            let genre = prompt(`Выш любимы жанр под номером  ${i}` );
            if(genre === '' || genre == null){
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            }else{
                personalMovieDB.genres[i - 1] = genre;
            }
        }   

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${++i} - это ${item} `);
        });
    }

};

personalMovieDB.writeYourGenres();

