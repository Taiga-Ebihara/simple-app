<template>
  <div class="rounded-md hover:bg-gray-200 active:bg-gray-300" @click="$emit('click')">
    <slot />
  </div>
</template>
