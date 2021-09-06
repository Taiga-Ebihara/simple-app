<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld />
  </div>
</template>

<script>
export default {
  components: {
    HelloWorld: () => import('@/components/Home/HelloWorld.vue'),
  },
}
</script>
