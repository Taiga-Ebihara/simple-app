<template>
  <input
    type="text"
    v-model="inputValue"
    class="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md outline-none hover:border-gray-400 active:border-gray-500"
    :style="`width: ${width}px;`"
  />
</template>

<script>
export default {
  props: {
    width: { type: Number, default: 400 },
    value: { type: String, default: '' },
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
}
</script>
