<script>
    import feather from 'feather-icons'

    export let createRouter;
    import './assets/css/main.js'
    import Loader from './loader.svelte'
    import HeaderTop from './header/top.svelte'
    import HeaderNav from './header/nav.svelte'
    
    import Popup from './popup.svelte'
    
    import { onMount } from 'svelte';
    onMount(async () => {
        feather.replace()
        document.body.classList.add('no-loader');
    });
    
</script>

<Loader />
<!--<Popup />-->
<div class="page-container">
    <HeaderTop />
    <HeaderNav />

    <div class="page-content" use:createRouter />
</div>