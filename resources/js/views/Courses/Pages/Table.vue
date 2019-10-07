<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10 p-2">
                <div class="card bg-gradient-light h-100">
                    <div class="card-header">Курсы</div>
                    <div class="card-body d-inline-flex justify-content-between">
                        <router-link to="/courses"
                                     class="btn btn-primary ml-3 mr-3">Все курсы
                        </router-link>
                        <router-link v-show="is_admin"
                                     to="/courses/add"
                                     class="btn btn-primary ml-3 mr-3">Добавить курс
                        </router-link>
                    </div>
                            <input type="text"
                                   v-model="search_word"
                                   placeholder="Search"
                                   class="mr-5 ml-5 p-2"
                                   @input="searchCourse"
                            >
                    <div class="row">
                        <div class="col-md-4 p-4 d-flex"
                             v-for="item in courses.data">
                            <div class="card text-center col-md-12 align-items-stretch">
                                <img :src="item.img"
                                     class="card-img-top"
                                     style="height: 10rem; object-fit: cover;"
                                     alt="">
                                <div class="card-block">
                                    <h5 class="card-title p-2 m-1">{{ item.name }} </h5>
                                    <p class="card-text p-2 m-1">{{ item.author }}</p>
                                    <div class="m-2 ">
                                        <router-link
                                            :to="'/courses/show/' + item.id"
                                            class="btn btn-primary mr-2"
                                            exact
                                            active-class="active"
                                        > Подробнее...
                                        </router-link>
                                        <a
                                            :href='item.link'
                                            class="btn btn-primary"
                                        >Сайт
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <paginate v-show="this.courses.data.length >= 0"
                        class="mt-2"
                        :page-count="+courses.last_page"
                        :page-range="3"
                        :prev-text="'Prev'"
                        :next-text="'Next'"
                        :click-handler="clickCallback"
                        :container-class="'pagination justify-content-center'"
                        :page-class="'page-item'"
                        :prev-class="'page-item'"
                        :next-class="'page-item'"
                        :page-link-class = "'page-link'"
                        :prev-link-class = "'page-link'"
                        :next-link-class = "'page-link'">
                    </paginate>
                </div>
            </div>
            <div class="col-md-2 p-2">
                <div class="card">
                    <div class="card-header">Новинки</div>
                    <div class="card-body text-center">
                        <div class="row">
                            <div class="col">IMG</div>
                        </div>
                        <div class="row">
                            <div class="col">Название
                                <hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Table",
        data() {
            return {
                sortKey: 'name',
                reverse: false,
                search_word: '',
                courses: [],
                is_admin: false,
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                window.axios.post('courses/items')
                    .then((response) => {
                        this.is_admin = response.data.is_admin;
                        this.courses = response.data.courses;
                });
            },
            clickCallback: function(pageNum) {
                if (this.search !== '' ) {
                    window.axios.post('courses/items?page=' + pageNum, {current_page: pageNum})
                        .then((response) => {
                            this.courses = response.data.courses;
                        });
                } else {
                    window.axios.post('courses/search?page=' + pageNum, {current_page: pageNum, search: this.search_word})
                        .then((response) => {
                            this.courses = response.data.courses;

                        });
                }
            },
            searchCourse() {
                if (this.search_word !== '') {
                    window.axios.post('courses/search', {search: this.search_word,})
                        .then((response) => {
                            this.courses = response.data.courses;
                            console.log(this.courses.data.length)
                        });
                } else {
                    this.init();
                }
            }
        },
    }
</script>

<style scoped>
    .card {

    }
</style>
