/*
 * @Author: your name
 * @Date: 2021-06-15 09:51:46
 * @LastEditTime: 2021-06-15 10:25:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/api/test.ts
 */
import { Api } from './url'
import { defHttp } from '../utils/http/axios'

export function getMarketQuotes() {
  return defHttp.request({
    url: Api.MARKET,
    method: 'GET'
  })
}
