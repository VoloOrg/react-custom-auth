import axios from 'axios'
console.log({__API_BASE});

// Create an Axios instance with default options
const axiosInstance = axios.create({
  baseURL: __API_BASE,
  withCredentials: true,
})

export default axiosInstance
