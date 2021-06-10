/*
 * @Author: your name
 * @Date: 2021-06-09 15:33:39
 * @LastEditTime: 2021-06-10 14:36:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/components/TestModal/index.tsx
 */
import React from 'react'
import { ApplicationModal } from 'state/application/actions'
import styled from 'styled-components/macro'
import { useModelOpen, useTestModalToggle } from 'state/application/hooks'
import Modal from '../Modal'

const CloseIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 14px;
  &::hover {
    cursor: pointer;
    opacity: 0.6;
  }
`
const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: gray;
  color: #fff;
  font-size: 14px;
`

export default function TestModal() {
  const testModalOpen = useModelOpen(ApplicationModal.TEST)
  const toggleTestModal = useTestModalToggle()

  return (
    <Modal isOpen={testModalOpen} onDismiss={toggleTestModal} minHeight={false}>
      <Wrapper>
        <CloseIcon onClick={toggleTestModal}>x</CloseIcon>
        <p>fdsfdsfdsfdsf</p>
        <p>fdsfdsfdsfdsf</p>
        <p>fdsfdsfdsfdsf</p>
        <p>fdsfdsfdsfdsf</p>
        <p>fdsfdsfdsfdsf</p>
      </Wrapper>
    </Modal>
  )
}
