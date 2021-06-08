// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
// Titolo
// Titolo Originale
// Lingua
// Voto

// Milestone 2:
// Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).

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

        axios

        .get(this.urlFilms + this.input)

        .then(resp => {

            const risultatoTemporaneo = resp.data.results;
            this.risultato =  this.risultato.concat(risultatoTemporaneo);

        }),

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

    },

})

