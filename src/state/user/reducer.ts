/*
 * @Author: your name
 * @Date: 2021-06-01 19:36:24
 * @LastEditTime: 2021-06-02 10:22:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/state/user/reducer.ts
 */
import { createReducer } from '@reduxjs/toolkit'
import { updateVersion } from '../global/actions'
import { updateMatchesDarkMode, updateUserDarkMode } from '../user/actions'
const currentTimestamp = () => new Date().getTime()

export interface UserState {
  lastUpdateVersionTimestamp?: number
  timestamp: number
  matchesDarkMode: boolean
  userDarkMode: boolean | null
}
export const initialState: UserState = {
  timestamp: currentTimestamp(),
  matchesDarkMode: false,
  userDarkMode: null
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateVersion, (state) => {
      state.lastUpdateVersionTimestamp = currentTimestamp()
    })
    .addCase(updateMatchesDarkMode, (state, action) => {
      state.matchesDarkMode = action.payload.matchesDarkMode
      state.timestamp = currentTimestamp()
    })
    .addCase(updateUserDarkMode, (state, action) => {
      state.userDarkMode = action.payload.userDarkMode
      state.timestamp = currentTimestamp()
    })
)
