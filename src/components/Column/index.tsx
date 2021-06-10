/*
 * @Author: your name
 * @Date: 2021-06-10 10:43:34
 * @LastEditTime: 2021-06-10 10:43:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/components/Column/index.tsx
 */
import styled from 'styled-components/macro'

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const ColumnCenter = styled(Column)`
  width: 100%;
  align-items: center;
`

export const AutoColumn = styled.div<{
  gap?: 'sm' | 'md' | 'lg' | string
  justify?: 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'space-between'
}>`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: ${({ gap }) => (gap === 'sm' && '8px') || (gap === 'md' && '12px') || (gap === 'lg' && '24px') || gap};
  justify-items: ${({ justify }) => justify && justify};
`

export default Column
