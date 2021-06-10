/*
 * @Author: your name
 * @Date: 2021-06-10 10:44:10
 * @LastEditTime: 2021-06-10 11:30:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/components/Popups/BasePopup.tsx
 */
import React, { useContext } from 'react'
import { AlertCircle, CheckCircle } from 'react-feather'
import styled, { ThemeContext } from 'styled-components'
import { TYPE } from '../../theme'
import { AutoColumn } from '../Column'
import { AutoRow } from '../Row'

const RowNoFlex = styled(AutoRow)`
  flex-wrap: nowrap;
`

export default function BasePopup({ title, success, summary }: { title: string; success?: boolean; summary?: string }) {
  const theme = useContext(ThemeContext)

  return (
    <RowNoFlex>
      <div style={{ paddingRight: 16 }}>
        {success ? <CheckCircle color={theme.green1} size={24} /> : <AlertCircle color={theme.red1} size={24} />}
      </div>
      <AutoColumn gap="8px">
        <TYPE.body fontWeight={500}>{title}</TYPE.body>
        <TYPE.blue>{summary}</TYPE.blue>
      </AutoColumn>
    </RowNoFlex>
  )
}
