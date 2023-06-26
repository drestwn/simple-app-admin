<script>
export default {
    name: 'Footer'
}
</script>
<template>
    <footer class="navbar fixed-bottom bg-white shadow" id="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 col-lg-2">
                    <a class="navbar-brand fs-6 d-flex align-items-center" href="#">
                        Footer
                    </a>
                </div>
                <div class="col-md-9 col-lg-10 d-md-none">
                    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#sidebar-menu" aria-controls="sidebar-menu" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </div>
    </footer>
</template>