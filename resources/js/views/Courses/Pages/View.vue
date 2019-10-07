<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Add Component</div>
                    <div class="card-body d-inline-flex justify-content-between">
                        <router-link to="/courses"
                                     class="btn btn-primary">Все курсы
                        </router-link>
                    </div>
                    <div class="col-10 justify-content-center m-auto">
                       <div class="card align-items-center text-center m-2">
                           <div class="card-img-top ml-auto">
                               <img :src="course.img"
                                    class="p-3"
                                    style="height: 20rem; object-fit: cover; border-radius: 20px"
                               >
                           </div>
                           <div class="card-title font-weight-bold" style="font-size: 24px;">{{course.name}}</div>
                           <div class="card-body text-align-justify">
                               <p><span class="font-weight-bold">Автор:</span> {{course.author}}</p>
                               <p><span class="font-weight-bold">Описание:</span> {{course.description}}</p>
                           </div>
                       </div>
                    </div>
                    <div class="card-body d-inline-flex justify-content-end">
                        <router-link v-show="is_admin === true"
                                     :to="'/courses/edit/' + course.id"
                                     class="btn btn-primary">Редактировать курс
                        </router-link>
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
                course: [],
                is_admin: false,
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                window.axios.post(window.location.origin + '/courses/show', { id: this.$route.params.id })
                    .then((response) => {
                            this.is_admin = response.data.is_admin
                            this.course = response.data.course;
                    });
            }
        }
    }
</script>

<style scoped>

</style>
