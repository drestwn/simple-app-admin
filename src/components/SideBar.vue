<script>

import { RouterLink } from 'vue-router';
export default {
    name: "SideBar",
    // components: { RouterLink }
}
</script>
<template>
    <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" id="sidebar-menu">
        <div class="position-sticky pt-3">
            <ul class="nav flex-column">
                <RouterLink to="/">
                    <li class="nav-item">
                        <a class="nav-link" href="" id="nav-product">
                            <span class="icon material-symbols-outlined me-2">Home</span>Home</a>
                    </li>
                </RouterLink>
                <RouterLink to="/adduser">
                    <li class="nav-item">
                        <a class="nav-link" href="" id="nav-category">
                            <span class="icon material-symbols-outlined me-2">add</span>Add User</a>
                    </li>
                </RouterLink>
            </ul>
            <h6
                class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                <span>Account</span>
            </h6>
            <ul class="nav flex-column mb-2">
                <li class="nav-item">
                    <a class="nav-link">
                        <span class="icon material-symbols-outlined me-2">person</span>Hei, User <span
                            id="username"></span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="" id="nav-logout">
                        <span class="icon material-symbols-outlined me-2">logout</span>Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>