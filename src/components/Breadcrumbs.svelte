<script>
  import { location, link } from 'svelte-spa-router';
  import { capitalize } from '../utils';

  function getParams(location) {
    let params = location.split('/');
    // remove the first item (home)
    params.shift();
    return params;
  }

  $: params = getParams($location);
</script>

<div class="bg-white">
  <div class="container">
    <div class="flex items-center flex-wrap py-4">
      <a href="/" use:link class="pr-1">Home</a>
      {#each params as param}
        <span class="material-icons-outlined text-gray-400">chevron_right</span>
        <span class="px-1">{capitalize(param)}</span>
      {/each}
    </div>
  </div>
</div>
