import { Axios } from '@/api'

const resourse = '/items'

export default {
  getItems: (params) => {
    return Axios.get(resourse, {
      params: { ...params },
    })
  },
  getSingleItem: (item_id) => {
    return Axios.get(`${resourse}/${item_id}`)
  }
}
