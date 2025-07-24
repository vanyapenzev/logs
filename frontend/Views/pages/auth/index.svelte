<script>
    export let createRouter;
    import '../../../assets/plugins/bootstrap/css/bootstrap.min.css'
    import '../../../assets/plugins/font-awesome/css/all.min.css'
    import '../../../assets/plugins/perfectscroll/perfect-scrollbar.css'
    import '../../../assets/css/main.min.css'
</script>

<div class="login-page">
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-md-12 col-lg-4">
                <div class="card login-box-container">
                    <div class="card-body" use:createRouter />
                </div>
            </div>
        </div>
    </div>
</div>>