import { defHttp } from './index'

enum Api {
  ACCOUNT_INFO = '/account/getAccountInfo'
}

interface GetAccountInfoModel {
  email: string
  name: string
  introduction: string
  phone: string
  address: string
}

export function accountInfoApi() {
  return defHttp.request<GetAccountInfoModel>({
    url: Api.ACCOUNT_INFO,
    method: 'GET'
  })
}
