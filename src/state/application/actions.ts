/*
 * @Author: your name
 * @Date: 2021-06-09 15:08:54
 * @LastEditTime: 2021-06-10 10:59:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/state/application/actions.ts
 */
import { createAction } from '@reduxjs/toolkit'

export enum ApplicationModal {
  TEST
}
export type PopupContent = {
  txn: {
    title: string
    success: boolean
    summary?: string
  }
}

export const setOpenModal = createAction<ApplicationModal | null>('application/setOpenModal')
export const addPopup =
  createAction<{ key?: string; removeAfterMs?: number | null; content: PopupContent }>('application/addPopup')
export const removePopup = createAction<{ key: string }>('application/removePopup')
