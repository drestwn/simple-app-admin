<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore, useGetOneStore } from '../stores/counter';
import { RouterLink } from 'vue-router';

export default {
    name: 'TableData',
    computed: {
        ...mapState(useUserStore, ['users']),
        ...mapState(useGetOneStore, ['userDataOne'])

    },
    methods: {
        ...mapActions(useUserStore, ['renderUsers', 'delUser']),
        // ...mapActions(useDeleteuserStore, ['delUser']),
        ...mapActions(useGetOneStore, ['getoneUser'])
    },
    created() {
        this.renderUsers()
    }
}
</script>
<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="display-2">List Users</h1>
        <RouterLink to="/adduser">
            <button class="btn btn-primary rounded-pill" id="new-product">
                <span class="icon material-symbols-outlined">add</span>New User
            </button>
        </RouterLink>
    </div>
    <div class="row">
        <div class="col-12 table-responsive">
            <table class="table align-middle">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Image</th>
                        <th scope="col" width="250px">Email</th>
                        <th scope="col" width="50px"></th>
                    </tr>
                </thead>
                <tbody id="table-product">
                    <!-- {{ users }} -->
                    <tr v-for="(du, index) in  users " :key="du.id">
                        <td scope="row">{{ du.id }}</td>
                        <td class="fw-bold">{{ du.firstName }}</td>

                        <td>{{ du.lastName }}</td>
                        <td>
                            <img :src="du.image" class="img-fluid image-user" />

                        </td>
                        <td>{{ du.email }}</td>
                        <td>
                            <a class="ms-3" @click.prevent="getoneUser(du.id)" style="cursor: pointer"><span
                                    class="icon material-symbols-outlined text-danger">update</span></a>
                            <a class="ms-3" @click.prevent="delUser(du.id)" style="cursor: pointer"><span
                                    class="icon material-symbols-outlined text-danger">delete</span></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
.image-user {
    width: 200px;
    /* Adjust the width to your desired size */
    height: auto;
    /* Maintain the aspect ratio */
}
</style>