import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: __API_BASE,
  withCredentials: true,
})

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   (error) => {
//     const codes = [401, 404]
//     if (codes.includes(error.response.status)) {
//       // window.location.href = PRIVATE_PAGES.home
//     }
//     return Promise.reject(error)
//   }
// )

export default axiosInstance
