import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: __API_BASE,
  withCredentials: true,
})

export default axiosInstance
