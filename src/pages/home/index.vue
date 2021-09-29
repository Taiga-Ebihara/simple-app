<template>
  <div>
    <Home />
  </div>
</template>

<script>
export default {
  components: {
    Home: () => import('@/components/Home/index.vue'),
  },
}
</script>
