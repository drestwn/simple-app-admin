<script>
import { mapActions, mapState } from 'pinia';
import { useUseraddStore, useGetOneStore, } from '../stores/counter';

import { RouterLink } from 'vue-router';

export default {
    name: "addNewUser",
    computed: {
        ...mapState(useGetOneStore, ["userDataOne"]),
        isFormComplete() {
            const { firstName, lastName, imageUrl, email } = this.addNewUserData;
            return firstName && lastName && imageUrl && email;
        },
        maskedLastName() {
            return this.addNewUserData.lastName.replace(/./g, '*');
        },
    },
    data() {
        return {
            addNewUserData: {
                firstName: "",
                lastName: "",
                imageUrl: "",
                email: ""
            },

        }

    },

    methods: {
        ...mapActions(useUseraddStore, ["postUser"]),
        ...mapActions(useGetOneStore, ["getoneUser"]),

    },

    created() {
    }

}
</script>
<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="display-2">New User</h1>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <form id="product-form">
                <div class="mb-3">
                    <label for="product-name">First Name <span class="text-danger fw-bold">*</span></label>
                    <input type="text" class="form-control" placeholder="Enter First name" autocomplete="off" required
                        v-model="this.addNewUserData.firstName" />
                </div>
                <div class="mb-3">
                    <label for="product-name">Last Name <span class="text-danger fw-bold">*</span></label>
                    <input type="text" class="form-control" placeholder="Enter Last name" autocomplete="off" required
                        :value="maskedLastName" @input="addNewUserData.lastName = $event.target.value" />
                </div>

                <div class="mb-3">
                    <label for="product-desc">Profile Image <span class="text-danger fw-bold">*</span></label>
                    <input type="text" class="form-control" placeholder="Enter Profile Image" autocomplete="off" required
                        v-model="this.addNewUserData.imageUrl" />
                </div>
                <div class="mb-3">
                    <label for="product-desc">Email <span class="text-danger fw-bold">*</span></label>
                    <input type="email" class="form-control" placeholder="Enter Email" autocomplete="off" required
                        v-model="this.addNewUserData.email" />
                </div>
                <div class="row mt-5 mb-3">
                    <div class="col-6">
                        <RouterLink to="/">
                            <a class="btn btn-lg btn-light rounded-pill w-100 p-2">Cancel</a>
                        </RouterLink>
                    </div>
                    <div class="col-6">
                        <button class="btn btn-lg btn-primary rounded-pill w-100 p-2" type="submit"
                            @click.prevent="postUser(this.addNewUserData)" :disabled="!isFormComplete">
                            Submit
                        </button>

                    </div>
                </div>
            </form>
        </div>
    </div>
</template>