<template>
  <div class="flex justify-center">
    <Box>
      <h1 class="text-3xl font-bold text-left">{{ sampleData.title }}</h1>
      <Content v-html="contentHtml" class="" />
    </Box>
  </div>
</template>

<script>
import sampleData from './sample-data.js'
import marked from 'marked'

export default {
  data() {
    return {
      sampleData: sampleData,
      contentHtml: '',
    }
  },
  created() {
    this.contentHtml = this.mdToHtml(sampleData.body)
  },
  methods: {
    mdToHtml(mdText) {
      return marked(mdText)
    }
  }
}
</script>