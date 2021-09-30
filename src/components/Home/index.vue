<template>
  <div>
    <div class="flex justify-center">
      <div class="flex items-center mt-8">
        <Input />
        <Button class="ml-4" :is-loading="false">search</Button>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <List>
        <ListItemAction v-for="item in items" :key="item.id" @click="$router.push(`/detail/${item.id}`)">
          <ListItem>
            <ListItemAvator :url="item.user.profile_image_url" />
            <ListItemContent>
              <ListItemTitle>{{ item.title }}</ListItemTitle>
              <ListItemSubtitle>{{ item.body | removeMarkdown | cutLength(100) }}</ListItemSubtitle>
            </ListItemContent>
          </ListItem>
        </ListItemAction>
      </List>
    </div>
  </div>
</template>

<script>
import { ItemsRepository } from '@/repository'
import sampleData from './sample-data.js'
import removeMd from 'remove-markdown'

export default {
  filters: {
    removeMarkdown(mdText) {
      return removeMd(mdText)
    },
    cutLength(text, length) {
      return text.length > length
        ? text.slice(0, length) + '...'
        : text 
    }
  },
  data() {
    return {
      items: sampleData
    }
  },
  created() {
    //
  },
  methods: {
    async getItems() {
      const res = await ItemsRepository.getItems()
      console.log(res)
      this.items = res.data
    },
    async getSingleItem() {
      const res = await ItemsRepository.getSingleItem('70ab4e8e145318e72bd2')
      console.log(res)
    }
  }
}
</script>
