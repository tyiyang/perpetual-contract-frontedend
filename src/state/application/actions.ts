/*
 * @Author: your name
 * @Date: 2021-06-09 15:08:54
 * @LastEditTime: 2021-06-09 15:10:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/state/application/actions.ts
 */
import { createAction } from '@reduxjs/toolkit'

export enum ApplicationModal {
  TEST
}

export const setOpenModal = createAction<ApplicationModal | null>('application/setOpenModal')
