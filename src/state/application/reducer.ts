/*
 * @Author: your name
 * @Date: 2021-06-09 15:11:02
 * @LastEditTime: 2021-06-10 11:28:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/state/application/reducer.ts
 */
import { createReducer, nanoid } from '@reduxjs/toolkit'
import { ApplicationModal, setOpenModal, PopupContent, addPopup, removePopup } from './actions'
type PopupList = Array<{ key: string; show: boolean; content: PopupContent; removeAfterMs: number | null }>

export interface ApplicationState {
  readonly openModal: ApplicationModal | null
  readonly popupList: PopupList
}

const initialState: ApplicationState = {
  openModal: null,
  popupList: []
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(setOpenModal, (state, action) => {
      state.openModal = action.payload
    })
    .addCase(addPopup, (state, { payload: { content, key, removeAfterMs = 25000 } }) => {
      state.popupList = (key ? state.popupList.filter((popup) => popup.key !== key) : state.popupList).concat([
        {
          key: key || nanoid(),
          show: true,
          content,
          removeAfterMs
        }
      ])
    })
    .addCase(removePopup, (state, { payload: { key } }) => {
      state.popupList.forEach((p) => {
        if (p.key === key) {
          p.show = false
        }
      })
    })
})
