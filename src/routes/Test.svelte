<script>
  import { location } from 'svelte-spa-router';
  import Breadcrumbs from '../components/Breadcrumbs.svelte';

  // You need to define the component prop "params"
  export let params = {};
  console.log(params);
</script>

<Breadcrumbs/>

<div class="container py-8">
  <p>The current page is: {$location}</p>
  {#if params.first}
    <p>Your name is: <b>{params.first}</b> <b>{#if params.last}{params.last}{/if}</b></p>
  {/if}
</div>
