/*
 * @Author: your name
 * @Date: 2021-06-02 09:31:38
 * @LastEditTime: 2021-06-02 14:30:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/theme/style.d.ts
 */
import {
  FlattenSimpleInterpolation,
  ThemedCssFunction,
} from 'styled-components'
export type Color = string
export interface Colors {
  // base
  white: Color
  black: Color

  // text
  text1: Color
  text2: Color
  text3: Color
  // ...

  // backgrounds / greys
  bg1: Color
  bg2: Color
  bg3: Color
  // ...

  modalBG: Color
  advancedBG: Color
  // ...

  // primary
  primary1: Color
  primary2: Color
  // ...

  // secondary
  secondary1: Color
  secondary2: Color
  // ...

  // other
  red1: Color
  green1: Color
  // ...

  error: Color
  success: Color
  warning: Color
  // ...
}

export interface Grids {
  sm: number
  md: number
  lg: number
}

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {
    grids: Grids

    // shadows
    shadow1: string

    // media queries
    mediaWidth: {
      upToExtraSmall: ThemedCssFunction<DefaultTheme>
      upToSmall: ThemedCssFunction<DefaultTheme>
      upToMedium: ThemedCssFunction<DefaultTheme>
      upToLarge: ThemedCssFunction<DefaultTheme>
    }

    // css snippets
    flexColumnNoWrap: FlattenSimpleInterpolation
    flexRowNoWrap: FlattenSimpleInterpolation
  }
}
