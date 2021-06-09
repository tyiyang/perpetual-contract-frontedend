/*
 * @Author: your name
 * @Date: 2021-06-09 11:36:30
 * @LastEditTime: 2021-06-09 11:36:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/components/Tooltips/index.tsx
 */
import React, { useCallback, useState } from 'react'
import styled from 'styled-components/macro'
import Popover, { PopoverProps } from '../Popover'

const TooltipContainer = styled.div`
  width: 256px;
  padding: 0.6rem 1rem;
  font-weight: 400;
  word-break: break-word;
`

interface TooltipProps extends Omit<PopoverProps, 'content'> {
  text: string
}

interface TooltipContentProps extends Omit<PopoverProps, 'content'> {
  content: React.ReactNode
}

export default function Tooltip({ text, ...rest }: TooltipProps) {
  return <Popover content={<TooltipContainer>{text}</TooltipContainer>} {...rest} />
}

export function TooltipContent({ content, ...rest }: TooltipContentProps) {
  return <Popover content={<TooltipContainer>{content}</TooltipContainer>} {...rest} />
}

export function MouseoverTooltip({ children, ...rest }: Omit<TooltipProps, 'show'>) {
  const [show, setShow] = useState(false)
  const open = useCallback(() => setShow(true), [setShow])
  const close = useCallback(() => setShow(false), [setShow])
  return (
    <Tooltip {...rest} show={show}>
      <div onMouseEnter={open} onMouseLeave={close}>
        {children}
      </div>
    </Tooltip>
  )
}

export function MouseoverTooltipContent({ content, children, ...rest }: Omit<TooltipContentProps, 'show'>) {
  const [show, setShow] = useState(false)
  const open = useCallback(() => setShow(true), [setShow])
  const close = useCallback(() => setShow(false), [setShow])
  return (
    <TooltipContent {...rest} show={show} content={content}>
      <div
        style={{ display: 'inline-block', lineHeight: 0, padding: '0.25rem' }}
        onMouseEnter={open}
        onMouseLeave={close}
      >
        1212
        {children}
      </div>
    </TooltipContent>
  )
}
