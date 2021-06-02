/*
 * @Author: your name
 * @Date: 2021-05-31 11:47:52
 * @LastEditTime: 2021-06-02 16:08:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editœ
 * @FilePath: /aex-perpetual-contract-frontend/src/App.tsx
 */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { TYPE } from './theme'
function App() {
  const { t } = useTranslation()

  return (
    <>
      <TYPE.main>多语言准备：</TYPE.main>
      <TYPE.largeHeader>{t('common.title1')}</TYPE.largeHeader>
      <TYPE.small>{t('common.title')}</TYPE.small>
    </>
  )
}

export default App
