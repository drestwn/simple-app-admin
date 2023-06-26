<script>
import NavBar from '../components/NavBar.vue'
import SideBar from '../components/SideBar.vue';
import Footer from '../components/Footer.vue'
import TableData from '../components/TableData.vue';
import AddNewUser from '../components/addNewUser.vue';
import { RouterLink, RouterView } from 'vue-router'


export default {
  name: 'HomeView',
  components: {
    NavBar,
    SideBar,
    Footer,
    TableData,
    AddNewUser
  }
}
</script>

<template>
  <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="User-section">
    <TableData />
  </section>
</template>
