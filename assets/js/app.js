// Milestone 1:

// Milestone 2:

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

            const chiamataFilm = axios.get(this.urlFilms + this.apiKey + '&query=' + this.input);
            const chiamataSerie = axios.get(this.urlSerie + this.apiKey + '&query=' + this.input);

            axios.all([chiamataFilm, chiamataSerie])
            .then(axios.spread((...resp) => {
                const risultatoFilm = resp[0].data.results;
                const risultatoSerie = resp[1].data.results;

                this.risultato = [...risultatoFilm, ...risultatoSerie];

                this.input = ''

            }))

        .catch(error => {
            console.error(error);
            this.error = "Ci dispiace!, il servizio non è raggiungibile al momento";
        });

       },

       // gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API.
       getFlag(flagCode){
        flagCode === "en" ? flagCode = "gb" 
        : flagCode === "ja" ? flagCode = "jp" 
        : flagCode === "hi" ? flagCode = "in" 
        : flagCode = flagCode;
        
        return `https://flagcdn.com/28x21/${flagCode}.png`;
    }

    },

})

