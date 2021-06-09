/*
 * @Author: your name
 * @Date: 2021-06-09 15:11:02
 * @LastEditTime: 2021-06-09 15:14:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/state/application/reducer.ts
 */
import { createReducer } from '@reduxjs/toolkit'
import { ApplicationModal, setOpenModal } from './actions'

export interface ApplicationState {
  readonly openModal: ApplicationModal | null
}

const initialState: ApplicationState = {
  openModal: null
}

export default createReducer(initialState, (builder) => {
  builder.addCase(setOpenModal, (state, action) => {
    state.openModal = action.payload
  })
})
