/*
 * @Author: your name
 * @Date: 2021-05-31 11:47:52
 * @LastEditTime: 2021-06-09 11:45:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editœ
 * @FilePath: /aex-perpetual-contract-frontend/src/App.tsx
 */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { TYPE } from './theme'
import { MouseoverTooltip, MouseoverTooltipContent } from 'components/Tooltips'
function AdvancedDetails() {
  return (
    <>
      <p>12121</p>
      <p>1212</p>
    </>
  )
}
function App() {
  const { t } = useTranslation()

  return (
    <>
      <TYPE.main>多语言准备：</TYPE.main>
      <TYPE.largeHeader>{t('common.title1')}</TYPE.largeHeader>
      <TYPE.small>{t('common.title')}</TYPE.small>
      <div>
        <MouseoverTooltip text={t('common.title')}>?</MouseoverTooltip>
      </div>
      <div>
        <MouseoverTooltipContent content={<AdvancedDetails />}>12?</MouseoverTooltipContent>
      </div>
    </>
  )
}

export default App
