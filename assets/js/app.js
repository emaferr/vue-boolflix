// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
// Titolo
// Titolo Originale
// Lingua
// Voto



const app = new Vue({

    el: '#app',

    data: {

        urlFilms : 'https://api.themoviedb.org/3/search/movie?api_key=b9f1f2833add21394f701a0d15da73aa&query=',

        // urlSerie : 'https://api.themoviedb.org/3/search/movie?api_key=b9f1f2833add21394f701a0d15da73aa&query=',

        risultato : [],

        input :'',

        error : null

    },

    methods: {
    
       ricerca(){

        axios

        .get(this.urlFilms + this.input)

        .then(resp => {

            this.risultato = resp.data.results;
            
        })
        .catch(error => {
            console.error(error);
            this.error = "Ci dispiace!, il servizio non è raggiungibile al momento";
        });

       },

    },

})

// methods: {
    
//     ricerca(){

//      let ricercaFilm = axios.get(this.urlFilms + this.cerca)
//      let ricercaSerie = axios.get(this.urlSerie + this.cerca)

//      axios.all([ricercaFilm, ricercaSerie])
//      .then(axios.spread((...response) => {
//          let risultatoFilms = response[0].data.results;
//          let risultatoSerie = response[1].data.results;
         
//          this.risultato = [...risultatoFilms, ...risultatoSerie]
//      }))
//      .catch(error => {
//          console.error(error);
//          this.error = "Ci dispiace!, il servizio non è raggiungibile al momento";
//      });

//     },

//  },