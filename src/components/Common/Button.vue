<template>
  <button
    class="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md cursor-pointer select-none hover:border-gray-400 active:border-gray-500"
    :class="{
      'text-transparent pointer-events-none': isLoading,
    }"
    @click="$emit('click')"
  >
    <slot />
    <span v-if="isLoading" class="loading absolute h-4 w-4 border-2 border-gray-300 rounded-full animate-spin" />
  </button>
</template>

<script>
export default {
  props: {
    isLoading: { type: Boolean, default: false },
  },
}
</script>

<style scoped>
.loading {
  border-right-color: transparent;
}
</style>
