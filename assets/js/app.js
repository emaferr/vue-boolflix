// Milestone 1: OK
// Milestone 2: OK

const app = new Vue({

    el: '#app',

    // https://api.themoviedb.org/3/movie/ID/credits?api_key=b9f1f2833add21394f701a0d15da73aa&language=en-US

    data: {

        apiKey : 'b9f1f2833add21394f701a0d15da73aa',

        urlFilms : 'https://api.themoviedb.org/3/search/movie?api_key=',

        urlSerie : 'https://api.themoviedb.org/3/search/tv?api_key=',

        risultatoFilm : [],

        risultatoSerie : [],

        filmId : [],

        input :'', 

        error : null

    },

    methods: {
    
        ricerca(){

            

            const chiamataFilm = axios.get(this.urlFilms + this.apiKey + '&query=' + this.input);
            const chiamataSerie = axios.get(this.urlSerie + this.apiKey + '&query=' + this.input);

            axios.all([chiamataFilm, chiamataSerie])
            .then(resp => {
                this.risultatoFilm = resp[0].data.results;
                
                this.risultatoSerie = resp[1].data.results

                this.risultatoFilm.forEach(film => {
                    this.filmId = film.id

                    console.log(this.filmId);
                });

             
             
            })
           
            .catch(error => {
                console.error(error);
                this.error = "Ci dispiace!, il servizio non è raggiungibile al momento";
            })

            

        },

        giudizio: function(obj) {
            return Math.ceil(obj / 2);
        },

        poster: function (obj) {
            if (obj.poster_path) {
                return `https://image.tmdb.org/t/p/w342${obj.poster_path}`;
            } else {
                return 'assets/img/not-img.jpeg'
            }
        },

       

    },

})

