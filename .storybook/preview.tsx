/*
 * @Author: your name
 * @Date: 2021-06-04 10:50:43
 * @LastEditTime: 2021-06-04 10:51:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/.storybook/preview.tsx
 */
import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import store from '../src/state'
import { FixedGlobalStyle, theme, ThemedGlobalStyle } from '../src/theme'
import * as storybookThemes from './theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  dependencies: {
    withStoriesOnly: true,
    hideEmpty: true
  },
  docs: {
    theme: storybookThemes.light
  },
  viewport: {
    viewports: {
      mobile: {
        name: 'iPhone X',
        styles: {
          width: '375px',
          height: '812px'
        }
      },
      tablet: {
        name: 'iPad',
        styles: {
          width: '768px',
          height: '1024px'
        }
      },
      laptop: {
        name: 'Laptop',
        styles: {
          width: '1024px',
          height: '768px'
        }
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1440px',
          height: '1024px'
        }
      }
    }
  }
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark']
    }
  }
}

const withProviders = (Component: Story, context: Record<string, any>) => {
  const THEME = theme(context.globals.theme === 'dark')
  return (
    <>
      <StoreProvider store={store}>
        <SCThemeProvider theme={THEME}>
          <FixedGlobalStyle />
          <ThemedGlobalStyle />
          <main>
            <Component />
          </main>
        </SCThemeProvider>
      </StoreProvider>
    </>
  )
}

export const decorators = [withProviders]
