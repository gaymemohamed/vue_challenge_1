const app = Vue.createApp({
    data(){
        return {
            url:"https://www.google.com/",
            showBooks: true,
            books:[
                {title:"Arab Fashion", author:"gamal",img:"https://source.unsplash.com/random/200x200?sig=1",isFav:true},
                {title:"Ma Wraa Eltabi3a", author:"mohamed",img:"https://source.unsplash.com/random/200x200?sig=2",isFav:false},
                {title:"Suezan Mobarak", author:"ahmed",img:"https://source.unsplash.com/random/200x200?sig=3",isFav:true},
            ]
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        toggleFavClass(book){         
            book.isFav = !book.isFav    
        }

    }
})

app.mount('#app')   