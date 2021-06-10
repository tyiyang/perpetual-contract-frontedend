/*
 * @Author: your name
 * @Date: 2021-06-09 15:15:54
 * @LastEditTime: 2021-06-10 11:20:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/state/application/hooks.ts
 */
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../index'
import { ApplicationModal, setOpenModal, PopupContent, addPopup, removePopup } from './actions'

export function useModelOpen(modal: ApplicationModal): boolean {
  const openModal = useSelector((state: AppState) => state.application.openModal)
  return openModal === modal
}

export function useToggleModal(modal: ApplicationModal): () => void {
  const open = useModelOpen(modal)
  const dispatch = useDispatch<AppDispatch>()
  return useCallback(() => dispatch(setOpenModal(open ? null : modal)), [dispatch, modal, open])
}

export function useOpenModal(modal: ApplicationModal): () => void {
  const dispatch = useDispatch<AppDispatch>()
  return useCallback(() => dispatch(setOpenModal(modal)), [dispatch, modal])
}

export function useCloseModal(): () => void {
  const dispatch = useDispatch<AppDispatch>()
  return useCallback(() => dispatch(setOpenModal(null)), [dispatch])
}

export function useTestModalToggle(): () => void {
  return useToggleModal(ApplicationModal.TEST)
}

// returns a function that allows adding a popup
export function useAddPopup(): (content: PopupContent, key?: string) => void {
  const dispatch = useDispatch()

  return useCallback(
    (content: PopupContent, key?: string) => {
      dispatch(addPopup({ content, key }))
    },
    [dispatch]
  )
}

// returns a function that allows removing a popup via its key
export function useRemovePopup(): (key: string) => void {
  const dispatch = useDispatch()
  return useCallback(
    (key: string) => {
      dispatch(removePopup({ key }))
    },
    [dispatch]
  )
}

// get the list of active popups
export function useActivePopups(): AppState['application']['popupList'] {
  const list = useSelector((state: AppState) => state.application.popupList)
  return useMemo(() => list.filter((item) => item.show), [list])
}
