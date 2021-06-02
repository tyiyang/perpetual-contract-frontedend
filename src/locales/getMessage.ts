/*
 * @Author: your name
 * @Date: 2021-05-31 15:47:11
 * @LastEditTime: 2021-06-02 16:00:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/locales/getMessage.ts
 */
import { set } from 'lodash-es'
const obj: Recordable = {}
const modules = require.context('./lang/', true, /\.json$/)

modules.keys().forEach((module) => {
  // const mod = modules(module).default;
  const mod = modules(module)
  console.log(mod)

  let k = module.replace('./', '')
  const lastIndex = k.lastIndexOf('.')
  k = k.substring(0, lastIndex)
  const keyList = k.split('/')
  const lang = keyList.shift()
  const objKey = keyList.join('.')
  if (lang) {
    set(obj, lang, obj[lang] || {})
    set(obj[lang], 'translation', {})
    set(obj[lang]['translation'], objKey, mod)
  }
})

export default obj
