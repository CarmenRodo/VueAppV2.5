const app = Vue.createApp({
    data: function (){
        return {
            BookList: [
                {Img: 'https://image.ebooks.com/previews/096/096183/096183202/096183202.jpg', ISBN: '0735211302', Title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones', Author: 'James Clear', stated: '12/31/2021', Finished: '1/2/2022', Pages: 319, Published: '10/16/2018'},
                {Img: 'images/AtomicHabits.webp', ISBN: '0735211302', Title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones', Author: 'James Clear', stated: '12/31/2021', Finished: '1/2/2022', Pages: 319, Published: '10/16/2018'},
                {Img: 'images/AtomicHabits.webp', ISBN: '0735211302', Title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones', Author: 'James Clear', stated: '12/31/2021', Finished: '1/2/2022', Pages: 319, Published: '10/16/2018'},
                {Img: 'images/AtomicHabits.webp', ISBN: '0735211302', Title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones', Author: 'James Clear', stated: '12/31/2021', Finished: '1/2/2022', Pages: 319, Published: '10/16/2018'}
            ],
        }
    },

    methods: {
        deleteBook: function (item) {
            this.BookList.splice(this.BookList.indexOf(item), 1);
        },
        addIt(item){
            this.BookList.push(item);
        }
    },

    // mounted: function (){
    //     if(localStorage.getItem('BookList')){
    //         this.BookList = JSON.parse(localStorage.getItem('BookList'));
    //     }
    // },
    // watch: {
    //     BookList: {
    //         handler: function (newList) {
    //             localStorage.setItem('BookList', JSON.stringify(this.BookList));
    //         },
    //         deep: true,
    //     }
    // }
});