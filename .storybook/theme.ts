/*
 * @Author: your name
 * @Date: 2021-06-04 10:49:20
 * @LastEditTime: 2021-06-04 11:40:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/.storybook/theme.ts
 */
import { create } from '@storybook/theming'

// this themes the storybook UI
const BaseTheme = {
  brandTitle: 'AEX Design',
  brandUrl: 'https://www.aex.cool',
  brandImage: 'https://aexphoto-1251755124.file.myqcloud.com/img/banner_logo/aex_logo.gif'
}
export const light = create({
  base: 'light',
  ...BaseTheme
})

export const dark = create({
  base: 'dark',
  ...BaseTheme
})
