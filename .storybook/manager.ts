/*
 * @Author: your name
 * @Date: 2021-06-04 10:49:02
 * @LastEditTime: 2021-06-04 14:10:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aex-perpetual-contract-frontend/.storybook/manager.ts
 */

// 核心：主题更新不会使管理器缓存失效
// 解决方案： yarn storybook --no-manager-cache
import { addons } from '@storybook/addons'
import { light } from './theme'

addons.setConfig({ theme: light })
