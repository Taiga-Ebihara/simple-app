<template>
  <div>
    <Home />
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Home: () => import('@/components/Home/index.vue'),
  },
}
</script>
