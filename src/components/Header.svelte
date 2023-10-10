<script>
  import {user, loggedIn} from '../stores';

  let isOpen = false;

  $: displayName = `${$user.firstName} ${$user.lastName}`;

  function logInUser() {
    loggedIn.set(!$loggedIn);
  }

  function open() {
    isOpen = !isOpen;
  }
</script>

<header class="border-b-4 border-green-400">
  <div class="container">
    <nav class="flex items-center justify-between h-16">
      <a href="/" class="inline-block relative">
        <span class="absolute top-[-11px] left-2 font-bold tracking-tighter tracking-tighter text-green-300">My</span>
        <span class="logo font-bold text-3xl tracking-tighter text-green-400">Hubble</span>
      </a>
      <div class="flex items-center text-sm uppercase">
        <div class="group flex items-center cursor-pointer" on:click={open} on:keydown={open}>
          <span class="material-icons mr-1">{isOpen ? 'close' : 'menu' }</span>
          <span class="group-hover:underline">{isOpen ? 'close menu' : 'menu'}</span>
        </div>
        <a href="/" class="flex items-center h-6 pl-2 mx-2 border-l border-gray-900 hover:underline">
          <span>nl</span>
        </a>
        {#if $loggedIn}
          <div class="hidden sm:flex items-center">
            <span class="material-icons pl-2 mr-2 border-l border-gray-900">person</span>
            <span>{displayName}</span>
            <div class="px-2">&mdash;</div>
          </div>
        {/if}
        <button
            on:click={logInUser}
            class="hidden sm:flex items-center h-6 text-sm uppercase hover:underline"
            class:pl-2={!$loggedIn}
            class:border-l={!$loggedIn}
            class:border-gray-900={!$loggedIn}
        >
          <span>{$loggedIn ? 'logout' : 'login'}</span>
        </button>
      </div>
    </nav>
  </div>
  <div
      class="menu absolute inset-x-0 container pl-8 bg-white border-t-4 border-green-400 z-20 shadow-[0_8px_24px_0_rgba(0,0,0,0.1)]"
      class:hidden={!isOpen}
      aria-hidden={!isOpen}
      tabindex="-1"
  >
    <div class="md:grid md:grid-cols-[--grid-column-menu] md:gap-6">
      <div class="navigation-list pt-6 md:py-8 md:pr-4">
        <div>
          <h3 class="mb-3">Air plant tote bag</h3>
          <ul class="flex flex-wrap">
            <li><a href="/">Some cool link</a></li>
            <li><a href="/">Thundercats post-ironic blackbird</a></li>
            <li><a href="/">echo park lumbersexual vape</a></li>
            <li><a href="/">Viral tofu jean shorts</a></li>
            <li><a href="/">Gatekeep freegan echo</a></li>
            <li><a href="/">Venmo scenester distillery</a></li>
          </ul>
        </div>
        <div class="mt-3">
          <h3 class="mb-3">Bodega boys</h3>
          <ul class="flex flex-wrap">
            <li><a href="/">Taiyaki cloud bread</a></li>
            <li><a href="/">Milkshake street art</a></li>
            <li><a href="/">Edison bulb unicorn cronut glossier</a></li>
            <li><a href="/">Cray church-key</a></li>
          </ul>
        </div>
      </div>
      <div class="navigation-list-extra py-6 md:py-8 md:px-8">
        <h3 class="mb-3">Go to ...</h3>
        <ul>
          <li><a href="/">Edison bulb copper mug</a></li>
          <li><a href="/">Photo booth park bespoke</a></li>
          <li><a href="/">Tote bag intelligentsia pabst</a></li>
          <li><a href="/">Tumeric occupy</a></li>
          <li><a href="/">Imagined hardly coffee</a></li>
        </ul>
      </div>
    </div>
  </div>
</header>

<style>
  .menu h3 {
    @apply text-xl font-bold
  }
  .navigation-list ul > li {
    @apply w-full lg:w-1/2
  }
  .navigation-list ul > li,
  .navigation-list-extra ul > li {
    @apply text-gray-600 mb-1
  }
  .menu a:hover {
    @apply text-green-500 underline
  }
  .menu a::after {
    @apply relative top-1;
    content: 'chevron_right'; /* arrow_right */
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 18px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
</style>
