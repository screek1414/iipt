<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-around">
                <div>
                    <router-link :to="'/dashboard'"
                                 class="btn btn-primary"
                    >All
                    </router-link>

                </div>
                <div>
                    <router-link :to="'/dashboard/edit'"
                                 class="btn btn-primary"

                    >Edit
                    </router-link>
                </div>
                <div>
                    <router-link :to="'/dashboard/show'"
                                 class="btn btn-primary"
                    >Show
                    </router-link>
                </div>
                <div>
                    <router-link :to="'/dashboard/add'"
                                 class="btn btn-primary"
                    >Add
                    </router-link>
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
                is_admin: false
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {

            }
        }
    }
</script>

<style scoped>

</style>
