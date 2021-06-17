/*
 * @Author: your name
 * @Date: 2021-06-15 10:55:08
 * @LastEditTime: 2021-06-15 10:58:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/api/model/baseModel.ts
 */
export interface BasicPageParams {
  page: number
  limit: number
}

export interface BasicFetchResult<T extends any> {
  list: T
  total: number
}
