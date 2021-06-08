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

        url : 'https://api.themoviedb.org/3/search/movie?api_key=b9f1f2833add21394f701a0d15da73aa&query=ritorno al futuro',

        risultato : [],
    },


    // ordino gli Albumm per data
    methods: {


      },

    mounted() {
        
        axios

        .get(this.url)

        .then(resp => {

            let films = resp.data.results;

            for (let index = 0; index < films.length; index++){

                this.risultato.push(films[index])

            }

            console.log(this.risultato);
            
           
        })
        
    },

})
