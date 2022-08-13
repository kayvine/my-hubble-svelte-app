<script>
  import {user, loggedIn} from '../stores';

  let displayName = `${$user.firstName} ${$user.lastName}`;
  let open = false;

  function logInUser() {
    loggedIn.set(!$loggedIn);
  }
</script>

<header class="border-b-4 border-green-400">
  <div class="container">
    <nav class="flex items-center justify-between h-20">
      <a href="/" class="inline-block">
        <span class="logo font-bold text-3xl tracking-tighter text-green-400">Hubble</span>
      </a>
      <div class="flex items-center text-sm uppercase">
        <div class="flex items-center cursor-pointer" on:click={() => open = !open}>
          <span class="material-icons mr-1">{open ? 'close' : 'menu' }</span>
          <span class="hover:underline">{open ? 'close menu' : 'menu'}</span>
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
        <div
            on:click={logInUser}
            class="hidden sm:flex items-center h-6 cursor-pointer hover:underline"
            class:pl-2={!$loggedIn}
            class:border-l={!$loggedIn}
            class:border-gray-900={!$loggedIn}
        >
          <span>{$loggedIn ? 'logout' : 'login'}</span>
        </div>
      </div>
    </nav>
  </div>
  {#if open}
    <div class="border-t-4 border-green-400">
      <div class="container grid md:grid-cols-3 md:gap-4 my-4">
        <div class="pt-2">
          <h3>title</h3>
          <ul>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
        <div class="pt-2">
          <h3>title</h3>
          <ul>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
        <div class="pt-2">
          <h3>title</h3>
          <ul>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
        <div class="pt-2">
          <h3>title</h3>
          <ul>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
        <div class="pt-2">
          <h3>title</h3>
          <ul>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
      </div>
    </div>
  {/if}
</header>

<style>
  .logo::before {
    @apply text-base;
    content: 'MY';
    position: relative;
    top: -10px;
    left: 0;
  }
</style>
