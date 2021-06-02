/*
 * @Author: your name
 * @Date: 2021-06-02 16:26:00
 * @LastEditTime: 2021-06-02 16:38:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/utils/is.ts
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object')
}
// @todo val is Function. warning:Don't use `Function` as a type.
export function isFunction(val: unknown): val is any {
  return typeof val === 'function'
}

export function isString(val: unknown): val is string {
  return is(val, 'String')
}
