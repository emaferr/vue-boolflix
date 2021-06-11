const app = new Vue({

    el: '#app',

    data: {

        apiKey : 'b9f1f2833add21394f701a0d15da73aa',

        urlFilms : 'https://api.themoviedb.org/3/search/movie?api_key=',

        urlCastFilm : "https://api.themoviedb.org/3/movie/",

        risultatoFilm : [],

        filmId : [],

        urlSerie : 'https://api.themoviedb.org/3/search/tv?api_key=',

        urlCastSerie : 'https://api.themoviedb.org/3/tv/',

        risultatoSerie : [],

        serieId : [],

        generi : [],

        genere : '',

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

                for (let index = 0; index < this.risultatoFilm.length; index++) {

                    const elemento = this.risultatoFilm[index];

                    this.filmId = elemento.id

                    axios.get(this.urlCastFilm + this.filmId + "/credits?api_key=" + this.apiKey)
                    .then(cast => {

                        this.$set(elemento, "cast", cast.data.cast.slice(0, 5));

                    })
             
                    axios.get(this.urlCastFilm + this.filmId + "?api_key=" + this.apiKey)

                    .then(genere => {

                        this.$set(elemento, "genre", genere.data.genres);

                        let v = genere.data.genres;

                        for (let h = 0; h < v.length; h++) {
                            const elemento = v[h];

                            if (!this.generi.includes(elemento.name)){

                                this.generi.push(elemento.name)

                                console.log(generi);
                            }
                        }

                        

                    })
                        
                }

                this.risultatoSerie = resp[1].data.results;

                for (let i = 0; i < this.risultatoSerie.length; i++) {

                    const elemento = this.risultatoSerie[i];

                    this.serieId = elemento.id

                    axios.get(this.urlCastSerie + this.serieId + "/credits?api_key=" + this.apiKey)
                    .then(cast => {

                        this.$set(elemento, "cast", cast.data.cast.slice(0, 5));

                    })

                    axios.get(this.urlCastSerie + this.serieId + "?api_key=" + this.apiKey)

                    .then(genere => {

                        this.$set(elemento, "genre", genere.data.genres);
                        
                    })

                }

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

    // Faccio in modo che in prima pagina appaiano i film e le serie piu popolari
    mounted() {

        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b9f1f2833add21394f701a0d15da73aa&language=en-US&page=1')

        .then(resp =>{

            this.risultatoFilm = resp.data.results;

            for (let index = 0; index < this.risultatoFilm.length; index++) {

                const elemento = this.risultatoFilm[index];

                this.filmId = elemento.id

                axios.get(this.urlCastFilm + this.filmId + "/credits?api_key=" + this.apiKey)
                .then(cast => {

                    this.$set(elemento, "cast", cast.data.cast.slice(0, 5));

                })
         
                axios.get(this.urlCastFilm + this.filmId + "?api_key=" + this.apiKey)

                .then(genere => {

                    this.$set(elemento, "genre", genere.data.genres);

                    let v = genere.data.genres;

                        for (let h = 0; h < v.length; h++) {
                            const elemento = v[h];

                            if (!this.generi.includes(elemento.name)){

                                this.generi.push(elemento.name)

                                console.log(this.generi);
                            }
                        }

                })
                    
            }

            })

        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=b9f1f2833add21394f701a0d15da73aa&language=en-US&page=1')

        .then(resp =>{

            this.risultatoSerie = resp.data.results;

            for (let i = 0; i < this.risultatoSerie.length; i++) {

                const elemento = this.risultatoSerie[i];

                this.serieId = elemento.id

                axios.get(this.urlCastSerie + this.serieId + "/credits?api_key=" + this.apiKey)
                .then(cast => {

                    this.$set(elemento, "cast", cast.data.cast.slice(0, 5));

                })
         
                axios.get(this.urlCastSerie + this.serieId + "?api_key=" + this.apiKey)

                .then(genere => {

                    this.$set(elemento, "genre", genere.data.genres);

                })
                    
            }

            })

            this.genere = this.generi
        
    },

})

