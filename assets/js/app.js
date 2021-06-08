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

        url : 'https://api.themoviedb.org/3/search/movie?api_key=b9f1f2833add21394f701a0d15da73aa&query=',

        risultato : [],

        input :'',

    },

    methods: {
    
       ricerca(){

        axios

        .get(this.url + this.input)

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
