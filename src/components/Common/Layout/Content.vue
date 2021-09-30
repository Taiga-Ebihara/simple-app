<template>
  <div class="content w-full text-left">
    <slot />
  </div>
</template>

<style>
  .content > h1 {
    padding-bottom: 0.5rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgba(209, 213, 219, 1);
    font-size: 1.875rem;
    font-weight: bold;
    line-height: 2.25rem;
  }

  .content > p {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .content > pre {
    width: 100%;
    padding: 1rem;
    margin: 2rem 0;
    background-color: rgba(55, 65, 81, 1);
    border-radius: 0.375rem;
    color: white;
    overflow: scroll;
  }
</style>