import type { AxiosResponse } from 'axios'
import { useTranslation } from 'react-i18next'
import type { CreateAxiosOptions, RequestOptions, Result } from './types'
import { VAxios } from './Axios'
import { AxiosTransform } from './axiosTransform'

import { CheckStatus } from './checkStatus'

import { RequestEnum, ResultEnum, ContentTypeEnum } from './types'

import { isString } from '../../is'
import { setObjToUrlParams, deepMerge } from '../../index'
import { errorResult } from './const'
import { createNow, formatRequestDate } from './helper'

const apiUrl = process.env.apiUrl
// const prefix = 'v1';
const prefix = ''

/**
 * @description: 数据处理，方便区分多种处理方式
 */
const transform: AxiosTransform = {
  /**
   * @description: 处理请求数据
   */
  transformRequestData: (res: AxiosResponse<Result>, options: RequestOptions) => {
    // const { t } = useTranslation()
    const { isTransformRequestResult } = options
    // 不进行任何处理，直接返回
    // 用于页面代码可能需要直接获取code，data这些信息时开启
    if (!isTransformRequestResult) {
      return res.data
    }
    // 错误的时候返回

    if (!res.data) {
      // 接口错误，没返回data;
      return errorResult
    }
    //  这里 code，data为 后台统一的字段，需要在 types.ts内修改为项目自己的接口返回格式
    const { code, data } = res.data

    // 接口请求成功，直接返回结果
    if (code === ResultEnum.SUCCESS) {
      return data
    } else {
      return Promise.reject(res.data)
    }
    // 接口请求错误
    if (code === ResultEnum.ERROR) {
      // @todo 接口请求错误，统一提示错误信息
    }
    return errorResult
  },

  // 请求之前处理config
  beforeRequestHook: (config, options) => {
    const { apiUrl, joinPrefix, joinParamsToUrl, formatDate, joinTime = true } = options

    if (joinPrefix) {
      config.url = `${prefix}${config.url}`
    }

    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`
    }
    const params = config.params || {}
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      if (!isString(params)) {
        // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
        config.params = Object.assign(params || {}, createNow(joinTime, false))
      } else {
        // 兼容restful风格
        config.url = config.url + params + `${createNow(joinTime, true)}`
        config.params = undefined
      }
    } else {
      if (!isString(params)) {
        formatDate && formatRequestDate(params)
        config.data = params
        config.params = undefined
        if (joinParamsToUrl) {
          config.url = setObjToUrlParams(config.url as string, config.data)
        }
      } else {
        // 兼容restful风格
        config.url = config.url + params
        config.params = undefined
      }
    }
    return config
  },

  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors: (config) => {
    // 请求之前处理config
    // const { getLang } = useLocale()
    // const { account } = useAccount()
    // config.headers.locale = getLang.value

    // if (account.value) {
    //   config.headers.Authorization = account.value
    // }
    // if (token) {
    // jwt token
    // config.headers.Authorization = token;
    // }
    return config
  },

  /**
   * @description: 响应错误处理
   */
  responseInterceptorsCatch: (error: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation()
    // errorStore.setupErrorHandle(error);
    const { response, code, message } = error || {}
    const msg: string = response?.data?.error?.message ?? ''
    const err: string = error?.toString?.() ?? ''
    try {
      if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
        console.log(t('sys.api.apiTimeoutMessage'))
      }
      if (err?.includes('Network Error')) {
        console.log(t('sys.api.networkException'))
      }
    } catch (error) {
      throw new Error(error)
    }
    CheckStatus(error?.response?.status, msg)
    return Promise.reject(error)
  }
}

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(
    deepMerge(
      {
        timeout: 10 * 1000,
        // 基础接口地址
        // baseURL: globSetting.apiUrl,
        // 接口可能会有通用的地址部分，可以统一抽取出来
        // prefixUrl: prefix,
        headers: { 'Content-Type': ContentTypeEnum.JSON },
        // 如果是form-data格式
        // headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
        // 数据处理方式
        transform,
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 默认bu将prefix 添加到url
          joinPrefix: true,
          // 需要对返回数据进行处理
          isTransformRequestResult: true,
          // post请求的时候添加参数到url
          joinParamsToUrl: false,
          // 格式化提交参数时间
          formatDate: true,
          // 消息提示类型
          errorMessageMode: 'message',
          // 接口地址
          apiUrl: apiUrl,
          //  是否加入时间戳
          joinTime: true
        }
      },
      opt || {}
    )
  )
}
export const defHttp = createAxios()

// 适用于请求第三方接口，不适用于定制的协议
export const otherHttp = createAxios({
  requestOptions: {
    isTransformRequestResult: false
  }
})
