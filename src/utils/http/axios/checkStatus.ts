/*
 * @Author: your name
 * @Date: 2021-01-21 11:37:18
 * @LastEditTime: 2021-06-03 10:08:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fronted_v2/src/utils/http/axios/checkStatus.ts
 */
import { useTranslation } from 'react-i18next'
export function CheckStatus(status: number, msg: string): void {
  const { t } = useTranslation()
  switch (status) {
    case 400:
      console.log(`${msg}`)
      break
    case 403:
      console.log(t('sys.api.errMsg403'))
      break
    // 404请求不存在
    case 404:
      console.log(t('sys.api.errMsg404'))
      break
    case 405:
      console.log(t('sys.api.errMsg405'))
      break
    case 408:
      console.log(t('sys.api.errMsg408'))
      break
    case 500:
      console.log(t('sys.api.errMsg500'))
      break
    case 501:
      console.log(t('sys.api.errMsg501'))
      break
    case 502:
      console.log(t('sys.api.errMsg502'))
      break
    case 503:
      console.log(t('sys.api.errMsg503'))
      break
    case 504:
      console.log(t('sys.api.errMsg504'))
      break
    case 505:
      console.log(t('sys.api.errMsg505'))
      break
    default:
  }
}
