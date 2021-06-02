/*
 * @Author: your name
 * @Date: 2021-01-21 11:37:18
 * @LastEditTime: 2021-06-02 16:24:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fronted_v2/src/utils/http/axios/types.ts
 */
import type { AxiosRequestConfig } from 'axios'
import { AxiosTransform } from './axiosTransform'

export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined

export interface RequestOptions {
  // 请求参数拼接到url
  joinParamsToUrl?: boolean
  // 格式化请求参数时间
  formatDate?: boolean
  //  是否处理请求结果
  isTransformRequestResult?: boolean
  // 是否加入url
  joinPrefix?: boolean
  // 接口地址， 不填则使用默认apiUrl
  apiUrl?: string
  // 错误消息提示类型
  errorMessageMode?: ErrorMessageMode
  // 是否加入时间戳
  joinTime?: boolean
}

export interface CreateAxiosOptions extends AxiosRequestConfig {
  prefixUrl?: string
  transform?: AxiosTransform
  requestOptions?: RequestOptions
}

export interface Result<T = any> {
  code: number
  data: T
}
// multipart/form-data：上传文件
export interface UploadFileParams {
  // 其他参数
  data?: Indexable
  // 文件参数的接口字段名
  name?: string
  // 文件
  file: File | Blob
  // 文件名
  filename?: string
  [key: string]: any
}
/**
 * @description: Request result set
 */
export enum ResultEnum {
  SUCCESS = 20000,
  // 再定义
  ERROR = 1,
  TYPE = 'success'
}

/**
 * @description: request method
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8'
}
