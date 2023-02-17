import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'
const cache = setupCache({
  maxAge: 10 * 1000,
})

const baseURL = process.env.NEXT_PUBLIC_API_URL

const service = axios.create({
  baseURL,
  adapter: cache.adapter,
})

export default service
