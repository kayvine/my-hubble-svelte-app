<script>
  import { link } from 'svelte-spa-router';
  import { user } from '../stores';
  import ActionButton from '../components/ActionButton.svelte';
  import Alert from '../components/Alert.svelte';
  import InfoCard from '../components/InfoCard.svelte';

  const hours = new Date().getHours() + 1;
  const greeting = hours > 13 ? hours > 18 ? 'Good evening' : 'Good afternoon' : 'Good morning';
</script>

<div class="some-img-here relative">
  <div class="container px-12 py-12 md:py-24">
    <div class="h1 text-white">{greeting}, {$user.firstName}!</div>
    <p class="text-white">Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  </div>
  <span class="absolute right-px bottom-px text-[11px] text-gray-400">
    Photo by <a
      href="https://unsplash.com/@cristina_gottardi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cristina Gottardi</a> on <a
      href="https://unsplash.com/collections/67943953/sand-dune-field?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </span>
</div>

<div class="container">
  <div class="grid grid-cols-1 lg:grid-cols-[1fr,330px] gap-4">

    <div class="this_is_the_main_column">
      <div class="pb-8">
        <div class="card bg-white">
          <div class="flex items-center px-6 md:px-8 py-3 border-b border-gray-200">
            <span class="material-icons-outlined md-40 text-green-400 my-2 mr-4 md:mr-6">feed</span>
            <div class="text-2xl font-bold mr-auto">Overview</div>
            <button type="button" class="btn btn-outline">Show all</button>
          </div>
          <Alert severity="info">This is an info message</Alert>
          <!--<Alert severity="error">This is an error message</Alert>-->
          <!--<Alert severity="warning">This is an warning message</Alert>-->
          <!--<Alert severity="success">This is an success message</Alert>-->
        </div>
      </div>
      <div class="pb-8">
        <div class="card bg-white">
          <div class="flex items-center px-6 md:px-8 py-3 border-b border-gray-200">
            <span class="material-icons-outlined md-40 text-green-400 my-2 mr-4 md:mr-6">event</span>
            <div class="text-2xl font-bold mr-auto">Declarations</div>
            <button on:click={() => alert('TODO')} type="button" class="btn btn-outline">Change</button>
          </div>
          <div class="px-6 md:px-8 py-3">
            <div class="flex items-center">
              <span class="my-3 mr-auto">223756845</span>
              <span class="mr-4 md:mr-20">21 june 2021</span>
              <span class="">102 EUR</span>
            </div>
            <hr/>
            <div class="flex items-center">
              <span class="my-3 mr-auto">2325486511</span>
              <span class="mr-4 md:mr-20">04 march 2021</span>
              <span class="">184 EUR</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="this_is_the_sidebar">
      <div class="pb-8">
        <div class="card">
          <div class="flex items-center bg-gray-50 px-6 md:px-8 py-3 border-b border-gray-200">
            <span class="material-icons-outlined md-40 text-green-400 my-2 mr-4 md:mr-6">person_outline</span>
            <div class="text-2xl font-bold">My account</div>
          </div>
          <div class="flex items-center bg-white px-6 md:px-8 py-3">
            <span class="my-3 mr-auto">Account details</span>
            <a href="/profile" use:link type="button" class="btn btn-outline">Edit</a>
          </div>
        </div>
      </div>
      <div class="flex flex-col pb-8">
        <ActionButton icon="event_available" title="Contact us" text="Make an appointment"/>
        <ActionButton icon="text_snippet" title="Doccle" text="View my documents"/>
      </div>
    </div>
  </div>

  <div class="pb-8">
    <div class="card bg-white">
      <div class="flex items-center px-6 md:px-8 py-3 border-b border-gray-200">
        <span class="material-icons-outlined md-40 text-green-400 my-2 mr-4 md:mr-6">speaker_notes</span>
        <div class="text-2xl font-bold mr-auto">Recourses</div>
      </div>
      <div class="flex items-center bg-gray-100 px-6 md:px-8 py-3">
        <span class="italic my-3">You currently have no resources in My Hubble.</span>
      </div>
    </div>
  </div>
</div>

<div class="container py-8">
  <h2>Links</h2>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 mt-4">
    <InfoCard image="/img/cristina-gottardi-VtRfw-dGPzg-unsplash.jpg">
      <h3 slot="title">Hello</h3>
      I'm baby occupy artisan williamsburg,
      edison bulb everyday carry mi taxidermy brooklyn.
      Sustainable four loko dreamcatcher cardigan.
    </InfoCard>
    <InfoCard>
      Direct trade cloud bread hot chicken, kinfolk street art messenger bag hella.
      Pickled thundercats everyday, chia try-hard letterpress iPhone.
    </InfoCard>
    <InfoCard>
      Actually occupy food truck flannel tote bag.
      Chillwave ready-made raclette gluten-free. Kombucha occupy franzen.
    </InfoCard>
    <div class="card bg-white pt-12 px-8">
      <ul class="list-disc list-outside pl-6 mb-12">
        <li>Something</li>
        <li>Something else</li>
        <li>More things</li>
      </ul>
    </div>
    <div class="some-other-img-here md:col-span-2 card bg-white h-64 pt-24 px-8 text-right">
      <h3 class="h3">Something here</h3>
      <p class="mt-1 text-sm leading-6">I'm baby artisan bulb everyday carry taxidermy brooklyn.</p>
    </div>
  </div>
</div>

<style>
  .some-img-here, .some-other-img-here {
    background-position: center;
    background-size: cover;
  }

  .some-img-here {
    background-image: url('/img/cristina-gottardi-VtRfw-dGPzg-unsplash.jpg');
  }

  .some-other-img-here {
    background-image: url('/img/joanna-kosinska-I3adKpDNAjM-unsplash.jpg');
  }
</style>
