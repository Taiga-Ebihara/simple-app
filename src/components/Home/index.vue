<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
import { ItemsRepository } from '@/repository'

export default {
  async created() {
    const res = await ItemsRepository.getItems()
    console.log(res)
  }  
}
</script>