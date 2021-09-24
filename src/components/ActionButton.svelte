<script>
  export let icon = 'event_available';
  export let title;
  export let text;
</script>

<div
    class="flex items-center bg-white p-6 m-1 border border-gray-200 rounded hover:bg-green-50 hover:border-green-400 cursor-pointer active:mt-px">
  <span class="material-icons-outlined md-40 text-green-400 mr-3">{icon}</span>
  <div class="mr-auto">
    <div class="text-lg font-bold uppercase text-gray-500">{title}</div>
    <span class="inline-block text-gray-400">{text}</span>
  </div>
  <span class="material-icons-outlined md-40 text-green-400">east</span>
</div>
