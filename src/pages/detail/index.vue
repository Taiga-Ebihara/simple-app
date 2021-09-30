<template>
  <div>
    <Detail />
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Detail: () => import('@/components/Detail/index.vue'),
  }
}
</script>