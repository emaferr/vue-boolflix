// Milestone 1:

// Milestone 2:

const app = new Vue({

    el: '#app',

    data: {

        urlFilms : 'https://api.themoviedb.org/3/search/movie?api_key=b9f1f2833add21394f701a0d15da73aa&query=',

        urlSerie : 'https://api.themoviedb.org/3/search/tv?api_key=b9f1f2833add21394f701a0d15da73aa&query=',

        risultato : [],

        input :'',

        error : null

    },

    methods: {
    
       ricerca(){

        this.risultato = [],

        // Chiamata film
        axios

        .get(this.urlFilms + this.input)

        .then(resp => {

            const risultatoTemporaneo = resp.data.results;
            this.risultato =  this.risultato.concat(risultatoTemporaneo);

        }),


        // Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, 
        // stando attenti ad avere alla fine dei valori simili
        axios

        .get(this.urlSerie + this.input)

        .then(resp => {

           const risultatoTemporaneo2 = resp.data.results;
           this.risultato =  this.risultato.concat(risultatoTemporaneo2);
            
        })

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

