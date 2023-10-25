app.component('BookList',{
    props:{
        list: {
            type: Array,
            required: true
        },
    },
    template:`
        <div class="container">
        <div class="row gx-4 justify-content-center">

        <book-list-item
        v-for="(item) in list"
        :key="item.ISBN"
        :item="item"
        ></book-list-item>

        </div>
        </div>
    `
})