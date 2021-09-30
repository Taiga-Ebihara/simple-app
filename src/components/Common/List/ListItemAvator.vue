<template>
  <div
    class="my-4 mr-6 bg-center bg-contain bg-no-repeat rounded-full"
    style="
      height: 40px;
      width: 40px;
      min-width: 40px;
    "
    :style="`background-image: url(${url});`"
  >
  </div>
</template>

<script>
export default {
  props: {
    url: { type: String, required: true }
  }
}
</script>