<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
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
