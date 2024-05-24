import axios from 'axios'
import { PUBLIC_PAGES } from 'constants/pages';

const axiosInstance = axios.create({
  baseURL: __API_BASE,
  withCredentials: true,
})

axiosInstance.interceptors.response.use(
  null,
  (error) => { 
    const codes = [401]
    if (codes.includes(error.response.status)) {
      localStorage.removeItem('isLoggedIn')
      window.location.href = PUBLIC_PAGES.login
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
