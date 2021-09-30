<template>
  <div class="py-8 px-12 border border-gray-300 rounded-md" :style="`width: ${width}px`">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    width: { type: Number, default: 800 }
  }
}
</script>