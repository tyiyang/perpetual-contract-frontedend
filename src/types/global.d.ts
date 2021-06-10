/*
 * @Author: your name
 * @Date: 2021-05-31 15:49:00
 * @LastEditTime: 2021-06-10 14:55:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/types/global.d.ts
 */
declare type Recordable<T extends any = any> = Record<string, T>
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}
declare type Indexable<T extends any = any> = {
  [key: string]: T
}
type EmptyObject = {
  [K in any]: never
}
