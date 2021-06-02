/*
 * @Author: your name
 * @Date: 2021-06-02 09:41:31
 * @LastEditTime: 2021-06-02 10:01:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/src/theme/darkModeQueryParams.tsx
 */

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { parse } from 'qs'
import { AppDispatch } from '../state'
import { updateUserDarkMode } from '../state/user/actions'
export default function DarkModeQueryParamReader({ location: { search } }: RouteComponentProps): null {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    if (search) return
    if (search.length < 2) return

    const parsed = parse(search, {
      parseArrays: false,
      ignoreQueryPrefix: true
    })

    const theme = parsed.theme

    if (typeof theme !== 'string') return

    if (theme.toLowerCase() === 'light') {
      dispatch(updateUserDarkMode({ userDarkMode: false }))
    } else if (theme.toLowerCase() === 'dark') {
      dispatch(updateUserDarkMode({ userDarkMode: true }))
    }
  }, [dispatch, search])

  return null
}
