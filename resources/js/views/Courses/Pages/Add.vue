<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Add Component</div>
                    <div class="card-body d-inline-flex justify-content-between">
                        <router-link to="/courses" class="btn btn-primary">Все курсы</router-link>
                        <router-link v-show="is_admin === true" to="/courses/add" class="btn btn-primary disabled">Добавить курс</router-link>
                    </div>
                    <div class="col-10 justify-content-center m-auto">
                        <div class="row">
                            <input class="form-control m-2"
                                   v-model="model.name"
                                   type="text"
                                   placeholder="Название">
                            <input class="form-control m-2"
                                   v-model="model.author"
                                   type="text"
                                   placeholder="Автор">
                            <textarea class="textarea form-control m-2"
                                      v-model="model.description"
                                      rows="4"
                                      placeholder="Описание"></textarea>
                            <input class="form-control m-2"
                                   v-model="model.link"
                                   type="text"
                                   placeholder="Ссылка"
                            >
                            <input class="form-control m-2"
                                   v-model="model.img"
                                   type="text"
                                   placeholder="Картинка(ссылка)"
                            >
                        </div>
                        <div class="row justify-content-end p-2">
                            <button
                                class="btn btn-dark"
                                @click="save()"
                            >Добавить курс</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Add",
        data() {
            return {
                model: {
                    name: null,
                    author: null,
                    description: null,
                    link: null,
                    img: null
                },
                is_admin: false
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            save() {
                window.axios.post(window.location.origin + '/courses/store', this.model)
                    .then((response) => {
                        this.$router.push({ path: '/courses' });
                    });
            },
            init() {
              window.axios.post(window.location.origin + '/courses/create')
                .then((response) => {
                    if (response.data.is_admin === false) {
                        this.$router.push({path: '/courses'})
                    } else {
                        this.is_admin = response.data.is_admin;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    textarea {
        resize: none;
    }
</style>
