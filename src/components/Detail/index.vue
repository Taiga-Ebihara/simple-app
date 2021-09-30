<template>
  <div class="flex justify-center mt-8">
    <Box v-if="itemData">
      <h1 class="pb-2 mb-16 border-b-8 border-double border-gray-300 text-4xl font-bold text-left break-all">{{ itemData.title }}</h1>
      <Content v-html="contentHtml" />
    </Box>
  </div>
</template>

<script>
import { ItemsRepository } from '@/repository'
import marked from 'marked'

export default {
  data() {
    return {
      itemData: null,
      contentHtml: '',
    }
  },
  async created() {
    const itemId = this.$route.params.id
    this.itemData = await this.getSingleItem(itemId)

    this.contentHtml = marked(this.itemData.body)
  },
  methods: {
    async getSingleItem(itemId) {
      const res = await ItemsRepository.getSingleItem(itemId)
      return res.data
    },
  },
}
</script>
