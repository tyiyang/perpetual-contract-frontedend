/*
 * @Author: your name
 * @Date: 2021-06-04 10:55:56
 * @LastEditTime: 2021-06-04 14:23:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/components/Button/Button.stories.tsx
 */
import { Story } from '@storybook/react/types-6-0'
import styled from 'styled-components/macro'
import React from 'react'
import {
  ButtonConfirmed,
  ButtonDropdown,
  ButtonDropdownGrey,
  ButtonDropdownLight,
  ButtonEmpty,
  ButtonError,
  ButtonGray,
  ButtonLight,
  ButtonOutlined,
  ButtonPink,
  ButtonPrimary,
  ButtonRadio,
  ButtonSecondary,
  ButtonUNIGradient,
  ButtonWhite
} from './index'

const wrapperCss = styled.main`
  font-size: 2em;
  margin: 3em;
  max-width: 300px;
`

export default {
  title: 'Buttons',
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' }
  },
  decorators: [
    (Component: Story) => (
      <div css={wrapperCss}>
        <Component />
      </div>
    )
  ]
}

export const Radio = () => <ButtonRadio>按钮</ButtonRadio>
export const DropdownLight = () => <ButtonDropdownLight>按钮</ButtonDropdownLight>
export const DropdownGrey = () => <ButtonDropdownGrey>按钮</ButtonDropdownGrey>
export const Dropdown = () => <ButtonDropdown>按钮</ButtonDropdown>
export const Error = () => <ButtonError>按钮</ButtonError>
export const Confirmed = () => <ButtonConfirmed>按钮</ButtonConfirmed>
export const White = () => <ButtonWhite>按钮</ButtonWhite>
export const Empty = () => <ButtonEmpty>按钮</ButtonEmpty>
export const Outlined = () => <ButtonOutlined>按钮</ButtonOutlined>
export const Gradient = () => <ButtonUNIGradient>按钮</ButtonUNIGradient>
export const Pink = () => <ButtonPink>按钮</ButtonPink>
export const Secondary = () => <ButtonSecondary>按钮</ButtonSecondary>
export const Gray = () => <ButtonGray>按钮</ButtonGray>
export const Light = () => <ButtonLight>按钮</ButtonLight>
export const Primary = () => <ButtonPrimary>按钮</ButtonPrimary>
