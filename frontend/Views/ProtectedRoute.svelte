<script>
    import { Route } from 'svelte-routing';
    import App from '../App.svelte';

    export let path;
    export let component;
</script>

<Route path={path} component={component}/>