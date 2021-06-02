/*
 * @Author: your name
 * @Date: 2021-06-02 16:22:54
 * @LastEditTime: 2021-06-02 16:40:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/utils/http/axios/helper.ts
 */
import { isObject, isString } from '../../is'

export function createNow<T extends boolean>(join: boolean, restful: T): T extends true ? string : any

export function createNow(join: boolean, restful = false): string | any {
  if (!join) {
    return restful ? '' : {}
  }
  const now = new Date().getTime()
  if (restful) {
    return `?_t=${now}`
  }

  return {
    _t: now
  }
}

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm'
/**
 * @description: 格式化请求参数时间
 */
export function formatRequestDate(params: any) {
  for (const key in params) {
    if (params[key] && params[key]._isAMomentObject) {
      params[key] = params[key].format(DATE_TIME_FORMAT)
    }
    if (isString(key)) {
      const value = params[key]
      if (value) {
        try {
          params[key] = isString(value) ? value.trim() : value
        } catch (error) {
          throw new Error(error)
        }
      }
    }
    if (isObject(params[key])) {
      formatRequestDate(params[key])
    }
  }
}
