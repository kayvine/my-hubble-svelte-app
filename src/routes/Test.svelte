<script>
  import {location} from 'svelte-spa-router';

  // You need to define the component prop "params"
  export let params = {}
  console.log(params);
</script>

<p>The current page is: {$location}</p>
<p>Your name is: <b>{params.first}</b> <b>{#if params.last}{params.last}{/if}</b></p>
