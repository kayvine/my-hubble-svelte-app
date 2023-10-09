<script>
  import { createEventDispatcher } from 'svelte';

  export let title = undefined;
  export let data;
  export let icon;
  export let description = undefined;
  export let disabled = false;

  const dispatch = createEventDispatcher();

  let active = false;

  $: isDisabled = !active && disabled;

  export function show() {
    active = !active;
    dispatch('showDetail', { active });
  }
</script>

<div class="flex items-start relative min-h-[6rem] px-6 md:px-8 py-3 border-b border-gray-200">
  {#if isDisabled}
    <div class="absolute inset-0 bg-white opacity-50 rounded"></div>
  {/if}
  <span class="{active ? 'text-green-400' : 'text-gray-400' } material-icons-outlined md-36 md:md-40 my-2 mr-6">
    {icon || 'info'}
  </span>
  <div class="mr-auto pt-2">
    {#if title}
      <div class="text-gray-500">{title}</div>
    {/if}
    <span class="block font-semibold">{@html data || 'Nothing here'}</span>
  </div>
  {#if description}
    <span class="hidden md:block w-48 text-sm text-gray-500 mt-2 mr-24">{description}</span>
  {/if}
  <button on:click={show} type="button" class="btn btn-outline mt-2" disabled={!active && disabled}>Edit</button>
</div>
{#if active}
  <div class="flex items-start bg-gray-50 px-4 py-8 border-b border-gray-200">
    <slot active={active}></slot>
  </div>
{/if}
