import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { BASE_URL, TIME_OUT } from "./request/config"
import { getLocalData } from "@/utils/local";


class Request {
  instance: AxiosInstance
  constructor(baseURL: string, timeout: number) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.request.use(
      (config: any) => {
        const token = getLocalData("token")
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => {
        return error
      }
    )
    this.instance.interceptors.response.use((res) => {
      const data = res.data
      return data
    })
  }
  get(config: AxiosRequestConfig) {
    return this.instance.request({ method: 'GET', ...config })
  }
  post(config: AxiosRequestConfig) {
    return this.instance.request({ method: 'POST', ...config })
  }
}


export default new Request(BASE_URL, TIME_OUT)