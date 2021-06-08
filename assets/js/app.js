const app = new Vue({

    el: '#app',

    data: {

        url : 'https://api.themoviedb.org/3/search/movie?api_key=b9f1f2833add21394f701a0d15da73aa&query=ritorno al futuro',
    },


    // ordino gli Albumm per data
    methods: {


      },

    mounted() {
        
        axios

        .get(this.url)

        .then(resp => {

           
        })
        
    },

})
