<script>
  import {link} from 'svelte-spa-router';
  import {user} from "../stores";

  const hours = new Date().getHours() + 1;
  const greeting = hours > 13 ? hours > 18 ? 'Good evening' : 'Good afternoon' : 'Good morning';
</script>

<div class="some-img-here">
  <div class="container py-8">
    <div class="h1">{greeting}, {$user.firstName}!</div>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  </div>
</div>

<div class="container">
  <div class="grid md:grid-cols-3 md:gap-4">

    <div class="md:col-span-2">
      <div class="pb-8">
        <div class="card bg-white">
          <div class="flex items-center px-8 py-3 border-b border-gray-200">
            <span class="material-icons-outlined md-40 text-green-400 my-2 mr-6">feed</span>
            <div class="text-2xl font-bold mr-auto">Overview</div>
            <button type="button" class="btn btn-outline">Show all</button>
          </div>
          <div class="flex items-center bg-blue-50 text-blue-400 px-8 py-6 border-l-4 border-blue-400">
            <span class="material-icons-outlined md-40 my-2 mr-6">info</span>
            <div class="text-2xl font-bold">This is an info message</div>
          </div>
        </div>
      </div>
      <div class="pb-8">
        <div class="card bg-white">
          <div class="flex items-center px-8 py-3 border-b border-gray-200">
            <span class="material-icons-outlined md-40 text-green-400 my-2 mr-6">event</span>
            <div class="text-2xl font-bold mr-auto">Declarations</div>
            <button on:click={() => alert('TODO')} type="button" class="btn btn-outline">Change</button>
          </div>
          <div class="flex items-center px-8 py-3">
            <span class="my-3 mr-auto">223756845</span>
            <span class="mr-20">21 june 2021</span>
            <span class="">102 EUR</span>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <div class="pb-8">
        <div class="card">
          <div class="flex items-center bg-gray-50 px-8 py-3 border-b border-gray-200">
            <span class="material-icons-outlined md-40 text-green-400 my-2 mr-6">person_outline</span>
            <div class="text-2xl font-bold">My account</div>
          </div>
          <div class="flex items-center bg-white px-8 py-3">
            <span class="my-3 mr-auto">Account details</span>
            <a href="/profile" use:link type="button" class="btn btn-outline">Edit</a>
          </div>
        </div>
      </div>
      <div class="pb-8">
        <div
            class="flex items-center bg-white p-6 m-1 border border-gray-200 rounded hover:bg-green-50 hover:border-green-400 cursor-pointer active:mt-px">
          <span class="material-icons-outlined md-40 text-green-400 mr-3">event_available</span>
          <div class="mr-auto">
            <div class="text-lg font-bold uppercase text-gray-500">Contact us</div>
            <span class="inline-block text-gray-400">Make an appointment</span>
          </div>
          <span class="material-icons-outlined md-40 text-green-400">east</span>
        </div>
      </div>
    </div>
  </div>

  <div class="pb-8">
    <div class="card bg-white">
      <div class="flex items-center px-8 py-3 border-b border-gray-200">
        <span class="material-icons-outlined md-40 text-green-400 my-2 mr-6">speaker_notes</span>
        <div class="text-2xl font-bold mr-auto">Recourses</div>
      </div>
      <div class="flex items-center bg-gray-100 px-8 py-3">
        <span class="italic my-3">You currently have no resources in My Hubble.</span>
      </div>
    </div>
  </div>
</div>

<div class="container py-8">
  <h2>Links</h2>
  <div class="grid md:grid-cols-3 md:gap-4 mt-4">
    <div class="card bg-white py-24 text-center">Something</div>
    <div class="card bg-white py-24 text-center">Something</div>
    <div class="card bg-white py-24 text-center">Something</div>
  </div>
</div>
