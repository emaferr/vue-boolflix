// Milestone 1: OK
// Milestone 2: OK

const app = new Vue({

    el: '#app',

    data: {

        apiKey : 'b9f1f2833add21394f701a0d15da73aa',

        urlFilms : 'https://api.themoviedb.org/3/search/movie?api_key=',

        urlSerie : 'https://api.themoviedb.org/3/search/tv?api_key=',

        risultato : [],

        input :'', 

        error : null

    },

    methods: {
    
       ricerca(){

            this.risultato = [];

            const chiamataFilm = axios.get(this.urlFilms + this.apiKey + '&query=' + this.input);
            const chiamataSerie = axios.get(this.urlSerie + this.apiKey + '&query=' + this.input);

            axios.all([chiamataFilm, chiamataSerie])
            .then(resp => {
                for(let i = 0; i < resp.length; i++) {   
                    this.risultato = this.risultato.concat(resp[i].data.results);
                }
                this.input = ''
            })
            .catch(error => {
                console.error(error);
                this.error = "Ci dispiace!, il servizio non è raggiungibile al momento";
            });

       },

        giudizio: function(obj) {
            return Math.ceil(obj / 2);
          },

    },

})

