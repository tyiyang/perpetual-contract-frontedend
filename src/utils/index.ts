/*
 * @Author: your name
 * @Date: 2021-01-27 10:36:27
 * @LastEditTime: 2021-06-02 16:43:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fronted_v2/src/utils/index.ts
 */
import { isObject } from './is'
// eslint-disable-next-line prettier/prettier
export const noop = () => ({})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])
  }
  return src
}

/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = ''
  let url = ''
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&'
  }
  parameters = parameters.replace(/&$/, '')
  if (/\?$/.test(baseUrl)) {
    url = baseUrl + parameters
  } else {
    url = baseUrl.replace(/\/?$/, '?') + parameters
  }
  return url
}

export function formateInput(val: string): string {
  let value = val.replace(/[^\d.]/g, '')

  //保证只有出现一个.而没有多个.
  value = value.replace(/\.{2,}/g, '.')

  // 保证0开头只能输入一个0
  value = value.replace(/^(0{2,})/g, '0')

  //必须保证第一个为数字而不是.
  value = value.replace(/^\./g, '')

  //保证.只出现一次，而不能出现两次以上
  value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')

  //只能输入6个小数
  value = value.replace(/^(-)*(\d+)\.(\d{0,6}).*$/, '$1$2.$3')

  return value
}

export function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
// 保留小数，非四舍五入
export const toFixed = (n: number, fixed: number) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)
