<script>
import { mapActions, mapState } from 'pinia';
import { useUseraddStore, useGetOneStore, useUpdateUserStore } from '../stores/counter';

import { RouterLink } from 'vue-router';
export default {
    name: 'EditUser',
    computed: {
        ...mapState(useGetOneStore, ["userDataOne"])
    },
    data() {
        return {
            updateUser: {
                id: '',
                firstName: '',
                lastName: '',
                imageUrl: '',
                email: ''
            },

        }

    },

    methods: {
        ...mapActions(useGetOneStore, ["getoneUser"]),
        ...mapActions(useUpdateUserStore, ['updateUserPost'])
    },
    created() {
        this.updateUser.id = this.userDataOne.id
        this.updateUser.firstName = this.userDataOne.firstName
        this.updateUser.lastName = this.userDataOne.lastName
        this.updateUser.imageUrl = this.userDataOne.image
        this.updateUser.email = this.userDataOne.email
    }

}
</script>
<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="display-2">Update User</h1>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <form id="product-form">
                <div class="mb-3">
                    <label for="product-name">First Name <span class="text-danger fw-bold">*</span></label>
                    <input type="text" class="form-control" placeholder="Enter First name" autocomplete="off" required
                        v-model="this.updateUser.firstName" />
                </div>
                <div class="mb-3">
                    <label for="product-name">Last Name <span class="text-danger fw-bold">*</span></label>
                    <input type="text" class="form-control" placeholder="Enter Last name" autocomplete="off" required
                        v-model="this.updateUser.lastName" />
                </div>

                <div class="mb-3">
                    <label for="product-desc">Profile Image <span class="text-danger fw-bold">*</span></label>
                    <input type="text" class="form-control" placeholder="Enter Profile Image" autocomplete="off" required
                        v-model="this.updateUser.imageUrl" />
                </div>
                <div class="mb-3">
                    <label for="product-desc">Email <span class="text-danger fw-bold">*</span></label>
                    <input type="email" class="form-control" placeholder="Enter Email" autocomplete="off" required
                        v-model="this.updateUser.email" />
                </div>
                <div class="row mt-5 mb-3">
                    <div class="col-6">
                        <RouterLink to="/">
                            <a class="btn btn-lg btn-light rounded-pill w-100 p-2">Cancel</a>
                        </RouterLink>
                    </div>
                    <div class="col-6">
                        <button class="btn btn-lg btn-primary rounded-pill w-100 p-2" type="submit"
                            @click.prevent="updateUserPost(this.updateUser)">
                            Submit Update
                        </button>

                    </div>
                </div>
            </form>
        </div>
    </div>
</template>