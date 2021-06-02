/*
 * @Author: your name
 * @Date: 2021-06-02 09:48:50
 * @LastEditTime: 2021-06-02 10:22:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/state/user/actions.ts
 */
import { createAction } from '@reduxjs/toolkit'

export const updateMatchesDarkMode = createAction<{ matchesDarkMode: boolean }>('user/updateMatchesDarkMode')
export const updateUserDarkMode = createAction<{ userDarkMode: boolean }>('user/updateUserDardMode')
