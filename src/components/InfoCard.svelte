<script>
  export let image = null;
</script>

<div class="card bg-white">
  {#if image}
    <figure class="max-h-[201px] overflow-hidden">
      <img src={image} alt="">
    </figure>
    <!--<div class="h-52 bg-cover" style:background-image={`url(${image})`}></div>-->
  {:else}
    <div class="hidden md:flex items-center bg-gradient-to-br from-warning-400 to-info-500 border-b border-gray-200">
      <span class="material-icons-outlined md-72 text-white my-16 mx-auto">rocket_launch</span>
    </div>
  {/if}
  <div class="flex flex-col px-6 md:px-8 py-5">
    <slot name="title"><h3>No title was provided</h3></slot>
    <p class="line-clamp-3 mt-3 text-sm leading-6 text-gray-500">
      <slot>
        this fallback content will be rendered when no content is provided, like in the first example
      </slot>
    </p>
    <div class="ml-auto mt-6">
      <a href="/" type="button" class="btn btn-outline">Action</a>
    </div>
  </div>
</div>
