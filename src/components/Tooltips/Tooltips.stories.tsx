/*
 * @Author: your name
 * @Date: 2021-06-10 14:38:08
 * @LastEditTime: 2021-06-10 15:03:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/components/Tooltips/Tooltips.stories.tsx
 */
import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import styled from 'styled-components/macro'
import { MouseoverTooltip, MouseoverTooltipContent } from './index'

const wrapperCss = styled.main`
  font-size: 2em;
  margin: 3em;
  max-width: 300px;
`

export default {
  title: 'Tooltips',
  decorators: [
    (Component: Story) => (
      <div css={wrapperCss}>
        <Component />
      </div>
    )
  ]
}
function Content() {
  return (
    <div>
      <p>1212121</p>
      <p>1212121</p>
      <p>1212121</p>
    </div>
  )
}
export const TooltipsWithText: React.VFC<EmptyObject> = () => <MouseoverTooltip text="纯文字">辅导费</MouseoverTooltip>
export const TooltipsWithContent: React.VFC<EmptyObject> = () => (
  <MouseoverTooltipContent content={Content()}>Content</MouseoverTooltipContent>
)
