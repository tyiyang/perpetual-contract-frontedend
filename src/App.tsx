/*
 * @Author: your name
 * @Date: 2021-05-31 11:47:52
 * @LastEditTime: 2021-06-15 15:35:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editœ
 * @FilePath: /aex-perpetual-contract-frontend/src/App.tsx
 */
import React, { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { TYPE } from './theme'
import { MouseoverTooltip, MouseoverTooltipContent } from 'components/Tooltips'
import { useAddPopup, useTestModalToggle } from 'state/application/hooks'
import TestModal from 'components/TestModal'
// import { getMarketQuotes } from './api/test'
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
  const addPopup = useAddPopup()
  const toggleWalletModal = useTestModalToggle()

  const addPopusHandler = useCallback(() => {
    addPopup(
      {
        txn: {
          title: '121212',
          success: false,
          summary: 'texttete'
        }
      },
      'hash1'
    )
  }, [addPopup])
  useEffect(() => {
    // getMarketQuotes()
    console.log(1212)
  }, [])
  return (
    <>
      <TYPE.main>多语言准备：</TYPE.main>
      <TYPE.largeHeader>{t('common.title1')}</TYPE.largeHeader>
      <TYPE.small>{t('common.title')}</TYPE.small>
      <div>
        <MouseoverTooltip text={t('common.title')}>纯文字tooltips</MouseoverTooltip>
      </div>
      <div>
        <MouseoverTooltipContent content={<AdvancedDetails />}>带结构tooltips?</MouseoverTooltipContent>
      </div>
      <div onClick={toggleWalletModal}>弹层</div>
      <div onClick={addPopusHandler}>Popup</div>
      <TestModal />
    </>
  )
}

export default App
