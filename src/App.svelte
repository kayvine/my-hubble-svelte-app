<script>
  import Router, {location, link} from 'svelte-spa-router';
  import routes from './routes';
  import {capitalize} from './utils';
  import Header from './Header.svelte';

  let params;

  function getParams(location) {
    let params = location.split('/');
    // remove the first item (home)
    params.shift();
    return params;
  }

  $: params = getParams($location);
</script>

<Header/>

<div class="bg-transparent">
  <div class="container">
    {#if $location !== '/'}
      <div class="flex items-center py-4">
        <a href="/" use:link class="pr-1">Home</a>
        {#each params as param}
          <span class="material-icons-outlined text-gray-400">chevron_right</span>
          <span class="px-1">{capitalize(param)}</span>
        {/each}
      </div>
    {/if}
  </div>
</div>

<main class="bg-gray-100">
  <Router {routes}/>
</main>

<hr class="w-32 border-green-400 mx-auto mt-6"/>
<footer class="container flex justify-between p-8 pt-0">
  <span>kayvine 2021</span>
  <div>
    Made with svelte
    <span class="material-icons-outlined md-18 text-blue-500">verified</span>
  </div>
</footer>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    h1, .h1 {
      @apply text-3xl font-bold text-green-400 mb-4;
    }

    h2, .h2 {
      @apply text-3xl font-extrabold text-green-400
    }

    .material-icons.md-18,
    .material-icons-outlined.md-18 {
      font-size: 18px;
    }

    .material-icons.md-24,
    .material-icons-outlined.md-24 {
      font-size: 24px;
    }

    .material-icons.md-36,
    .material-icons-outlined.md-36 {
      font-size: 36px;
    }

    .material-icons.md-40,
    .material-icons-outlined.md-40 {
      font-size: 40px;
    }
  }

  @layer components {

    .btn {
      @apply text-sm font-semibold uppercase py-1 px-2 rounded
    }

    .btn-outline {
      @apply bg-transparent text-gray-400 border-2 border-gray-200 hover:text-green-400 hover:border-green-400
    }

    .card {
      @apply m-1 border border-gray-200 rounded
    }

    .card :first-child {
      @apply rounded-t
    }

    .card :last-child {
      @apply rounded-b
    }

    .form-input {
      @apply appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight
    }

    .form-btn {
      @apply font-bold uppercase py-2 px-4
    }

    .form-btn.primary {
      @apply bg-green-400 hover:bg-green-500 text-white rounded
    }

    .form-btn.secondary {
      @apply bg-transparent hover:underline
    }

    input[type="checkbox"].switch {
      @apply relative w-12 h-6 bg-gray-300 text-2xl appearance-none rounded-full cursor-pointer;
      content: 'UIT';
    }

    input[type="checkbox"].switch::after {
      @apply absolute w-6 h-6 bg-white rounded-full scale-75;
      content: '';
    }

    input[type="checkbox"].switch:checked {
      @apply bg-green-400;
      content: 'AAN';
    }

    input[type="checkbox"].switch:checked::after {
      @apply transition;
      left: calc(100% - 1.5rem);
    }
  }

  p > a {
    @apply text-green-400
  }

  p > a:hover {
    @apply text-green-500 pb-px border-b border-green-500;
    background-image: url(/img/squiggle-link.svg);
    background-position: 0 100%;
    background-size: auto 36px;
    background-repeat: repeat;
    text-decoration: none;
    border-bottom: none;
    padding-bottom: 3px;
    word-break: break-word;
  }
</style>
