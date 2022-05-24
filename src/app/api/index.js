import axios from 'axios'
import { apiBaseUrl } from '../constants/api-config'

export const nasaApi = axios.create({
  baseURL: apiBaseUrl,
})
