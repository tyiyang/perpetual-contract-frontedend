/*
 * @Author: your name
 * @Date: 2021-06-01 17:22:54
 * @LastEditTime: 2021-06-02 16:01:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/state/global/actions.ts
 */
import { createAction } from '@reduxjs/toolkit'

// fired once when the app reloads but before the app renders
// allows any updates to be applied to store data loaded from localStorage
export const updateVersion = createAction<void>('global/updateVersion')
