/*
 * @Author: your name
 * @Date: 2021-05-31 11:47:52
 * @LastEditTime: 2021-06-02 16:00:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/index.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './state'
import './locales/i18n'
import App from './App'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from './theme'
import reportWebVitals from './reportWebVitals'
ReactDOM.render(
  <React.StrictMode>
    <FixedGlobalStyle />
    <Provider store={store}>
      <ThemeProvider>
        <ThemedGlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
// Match path for custom locale/namespace. Check out the docs for more details.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
