<template>
    <div class="container text-center" v-show="is_admin">
        <div class="">
            <div class="row">
                <div class="col-1 border-right">Имя</div>
                <div class="col-1 border-right">Роль</div>
            </div>
        </div>
        <div v-for="user in users">
            <div class="row">
                <div class="col-1">{{ user.name }}</div>
                <div class="col-1">{{ user.roles[0].name}}</div>
                <div class="col-1">{{ user.id }}</div>
                <div class="col-2">
                    <select v-model="user.roles[0].name" @change="changeRole(user.id, user.roles[0].name)">
                        <option v-for="role in roles" :value="role.name">{{role.name}}</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import router from "../router";

    export default {
        name: "Edit",
        data() {
            return {
                users: [],
                roles: [],
                is_admin: false
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                window.axios.post('/dashboard/users')
                    .then((response) => {
                        if (response.data.is_admin === false) {
                            location = ('/courses')
                        } else {
                            this.is_admin = response.data.is_admin
                            this.users = response.data.users
                            this.roles = response.data.roles
                        }
                        console.log(this.roles)
                    });
            },
            changeRole(id, role) {
                window.axios.post('/dashboard/changerole', {id: id, role: role})
            }
        }
    }
</script>

<style scoped>
    .row {
        font-size: 18px;
    }
</style>
