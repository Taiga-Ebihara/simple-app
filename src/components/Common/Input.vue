<template>
  <input
    type="text"
    class="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md outline-none hover:border-gray-400 active:border-gray-500"
    :style="`width: ${width}px;`"
  >
</template>

<script>
export default {
  props: {
    width: { type: Number, default: 400 }
  }
}
</script>