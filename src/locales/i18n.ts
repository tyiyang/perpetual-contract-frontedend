/*
 * @Author: your name
 * @Date: 2021-05-31 16:10:14
 * @LastEditTime: 2021-06-02 16:01:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/locales/i18n.ts
 */
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

// 通过浏览器加载语言包文件需要用到以下依赖
// import XHR from 'i18next-xhr-backend'
// import LanguageDetector from 'i18next-browser-languagedetector'

import messages from './getMessage'
i18next
  // .use(XHR)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // backend: {
    //   loadPath: `./locales/{{lng}}.json`,
    // },
    resources: messages,
    react: {
      useSuspense: true
    },
    // @todo 根据用户选择显示语言
    fallbackLng: 'zh-CN',
    preload: ['zh-CN'],
    keySeparator: '.',
    interpolation: { escapeValue: false }
  })

export default i18next
