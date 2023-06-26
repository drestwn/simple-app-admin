<script>
export default {
    name: 'Navbar'
}
</script>
<template>
    <header class="navbar sticky-top bg-white shadow" id="header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 col-lg-1">
                    <a class="navbar-brand fs-6 d-flex align-items-center" href="#">
                        Header
                    </a>
                </div>
                <div class="col-md-8 col-lg-10 d-md-none">
                    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#sidebar-menu" aria-controls="sidebar-menu" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>