<script></script>

<div class="card bg-white">
  <div class="flex items-center bg-gradient-to-br from-yellow-400 to-blue-500 px-8 py-3 border-b border-gray-200">
    <span class="material-icons-outlined md-72 text-white my-16 mx-auto">rocket_launch</span>
  </div>
  <div class="flex flex-col px-8 py-3">
    <div class="text-2xl font-bold">
      <slot name="title">No title was provided</slot>
    </div>
    <span class="my-3 mr-auto">
      <slot>
        this fallback content will be rendered when no content is provided, like in the first example
      </slot>
    </span>
    <a href="/" type="button" class="btn btn-outline">Action</a>
  </div>
</div>
