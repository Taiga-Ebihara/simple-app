<template>
  <div>
    <div class="flex justify-center">
      <div class="flex items-center mt-8">
        <Input v-model="searchText" />
        <Button class="ml-4" :is-loading="isLoading" @click="doSearch">search</Button>
      </div>
    </div>
    <div v-if="items.length" class="flex justify-center mt-8">
      <List>
        <ListItemAction v-for="item in items" :key="item.id" @click="$router.push(`/detail/${item.id}`)">
          <ListItem>
            <ListItemAvator :url="item.user.profile_image_url" />
            <ListItemContent>
              <ListItemTitle>{{ item.title }}</ListItemTitle>
              <ListItemSubtitle>{{ item.body | mdToPlain | cutLength(100) }}</ListItemSubtitle>
            </ListItemContent>
          </ListItem>
        </ListItemAction>
      </List>
    </div>
  </div>
</template>

<script>
import { ItemsRepository } from '@/repository'
import removeMd from 'remove-markdown'

export default {
  filters: {
    mdToPlain(mdText) {
      return removeMd(mdText)
    },
    cutLength(text, length) {
      return text.length > length ? text.slice(0, length) + '...' : text
    },
  },
  data() {
    return {
      isLoading: false,
      searchText: '',
      items: {},
    }
  },
  methods: {
    startLoading() {
      this.isLoading = true
    },
    finishLoading() {
      this.isLoading = false
    },
    async getItems(params = {}) {
      const res = await ItemsRepository.getItems(params)
      return res.data
    },
    async doSearch() {
      this.startLoading()

      const params = {
        query: `title:${this.searchText}`,
      }
      this.items = await this.getItems(params)

      this.finishLoading()
    },
  },
}
</script>
