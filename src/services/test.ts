import axios from "axios";
import { ElLoading, ElMessage } from 'element-plus'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

import { BASE_URL, TIME_OUT } from "./request/config"
import { getLocalData } from "@/utils/local";


interface MyAxiosRequestConfig extends AxiosRequestConfig {
    hideLoading?: boolean
}

interface IMyInterceptorsType extends AxiosRequestConfig {
    interceptors?: {
        requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
        requestFailFn?: (config: any) => any
        responseSuccessFn?: (config: AxiosResponse) => AxiosResponse
        responseFailFn?: (config: any) => any
    }
}




class LcfRequest {
    private axiosInstance: AxiosInstance
    private showLoading: boolean
    private loading: any
    constructor(config: IMyInterceptorsType) {
        this.axiosInstance = axios.create({ ...config })
        this.showLoading = true
        //全局的拦截器
        this.axiosInstance.interceptors.request.use((config: MyAxiosRequestConfig) => {
            //loading
            if (!config.hideLoading) {
                this.showLoading = true
                this.loading = ElLoading.service({
                    lock: true,
                    text: 'Loading',
                    background: 'rgba(0, 0, 0, 0.7)',
                })
            } else {
                this.showLoading = false
            }
            const token = getLocalData("token")
            config.headers!.Authorization = `Bearer ${token}`;
            return config
        })
        this.axiosInstance.interceptors.response.use(res => {
            console.log('拦截器23');
            //关闭loading
            if (!!this.showLoading) {
                this.loading.close()
            }
            if (res.data.code === 0) {
                ElMessage.success("数据获取成功")
                return res.data
            }
            // 没有鉴权，需要重新登录
            if (res.data.code === 401) {
                ElMessage.error("未授权")
                return res
            }
        }, err => {
            if (!!this.showLoading) {
                ElMessage.error(err)
                this.loading.close()
            }
        })

        //每个class独有的拦截器
        this.axiosInstance.interceptors.request.use(config.interceptors?.requestSuccessFn)
        this.axiosInstance.interceptors.response.use(config.interceptors?.responseSuccessFn)
    }
    request<T>(config: MyAxiosRequestConfig) {
        return new Promise<T>((resolve, reject) => {
            this.axiosInstance.request<any, T>({ ...config }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
    get<T = any>(config: MyAxiosRequestConfig) {
        return this.request<T>({ ...config, method: 'GET' })
    }
    post<T = any>(config: MyAxiosRequestConfig) {
        return this.request<T>({ ...config, method: 'post' })
    }
}


const request1 = new LcfRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    interceptors: {
        requestSuccessFn: (config) => {
            console.log('我是局部的拦截器');
            return config
        },
        responseSuccessFn: (res) => {
            console.log(res);
            return res
        }
    }
})
interface IType {
    list: any[]
}
interface IDataType {
    data: IType
    code: number
}

export function getDataList(data: {}) {
    return request1.post<IDataType>({
        url: "/role/list",
        data: {
            ...data
        }
    })
}