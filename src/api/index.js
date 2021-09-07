import axios from 'axios'

const baseURL = process.env.VUE_APP_API_BASE_URL
const timeout = 1000
const headers = {
  'Content-Type': 'application/json'
}

export const Axios = axios.create({
  baseURL,
  timeout,
  headers
})