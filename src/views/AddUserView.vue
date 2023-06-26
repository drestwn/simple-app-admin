<script>
import addNewUser from '../components/addNewUser.vue';
export default {
    name: 'AddUser',
    components: {
        addNewUser
    }
}
</script>
<template>
    <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="new-product-section">
        <addNewUser />
    </section>
</template>