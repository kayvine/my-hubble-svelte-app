<script>
  import Router from 'svelte-spa-router';
  import routes from './routes';
  import Header from './components/Header.svelte';
</script>

<Header/>

<main class="bg-gray-100">
  <Router {routes}/>
</main>

<footer class="border-t-4 border-green-400">
  <div class="container flex justify-between p-8">
    <span>kayvine {new Date().getFullYear()}</span>
    <div class="flex items-center">Made with svelte<span class="material-icons-outlined md-18 text-[#1DA1F2] ml-1">verified</span></div>
  </div>
</footer>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    :root {
      /*--shadow-menu: 0 8px 24px 0 rgba(0, 0, 0, 0.16);*/
      --grid-column-menu: 3fr minmax(200px, 2fr);
    }

    h1, .h1 {
      @apply text-3xl font-bold mb-4
    }

    h2, .h2 {
      @apply text-3xl font-extrabold text-green-400
    }

    h3, .h3 {
      @apply text-lg font-semibold
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

    .material-icons.md-72,
    .material-icons-outlined.md-72 {
      font-size: 72px;
    }
  }

  @layer components {
    .btn {
      @apply text-sm font-semibold uppercase py-1 px-2 rounded
    }

    .btn-outline {
      @apply bg-transparent text-gray-400 border-2 border-gray-200 hover:text-green-400 hover:border-green-300
    }

    .card {
      @apply m-1 border border-gray-200 rounded
    }

    .card > :first-child {
      @apply rounded-t
    }

    .card > :last-child {
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
      @apply relative w-12 h-6 bg-gray-300 text-2xl appearance-none rounded-full cursor-pointer transition-colors duration-300 ease-linear;
    }

    input[type="checkbox"].switch::after {
      @apply absolute left-0 w-6 h-6 bg-white rounded-full scale-75 duration-200 ease-linear;
      content: '';
      transition-property: left;
    }

    input[type="checkbox"].switch:checked {
      @apply bg-green-400;
    }

    input[type="checkbox"].switch:checked::after {
      left: calc(100% - 1.5rem);
    }
  }

  p > a {
    @apply text-green-400
  }

  p > a:hover {
    @apply text-green-500 pb-px border-b border-green-500;
    background-image: url('/img/squiggle-link.svg');
    background-position: 0 100%;
    background-size: auto 36px;
    background-repeat: repeat;
    text-decoration: none;
    border-bottom: none;
    padding-bottom: 3px;
    word-break: break-word;
  }
</style>
