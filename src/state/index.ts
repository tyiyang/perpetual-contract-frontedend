/*
 * @Author: your name
 * @Date: 2021-06-01 17:17:28
 * @LastEditTime: 2021-06-09 15:19:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/state/index.ts
 */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'
import { updateVersion } from './global/actions'
import user from './user/reducer'
import application from './application/reducer'
const PERSISTED_KEYS: string[] = ['user']
const store = configureStore({
  reducer: {
    user,
    application
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), save({ states: PERSISTED_KEYS, debounce: 1000 })],
  preloadedState: load({ states: PERSISTED_KEYS })
})

store.dispatch(updateVersion())

export default store
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
