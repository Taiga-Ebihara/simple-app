<template>
  <div class="flex items-center py-4 px-8 border-b last:border-0" :style="`width: ${width}px;`">
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