import * as React from 'react'

import { S } from './FooterMenuItem_Styles'

import { Menu } from '@/components'

type PropsType = {
  title: string
  items: string[]
  direction?: string
  gap?: string
}

export const FooterMenuItem: React.FC<PropsType> = ({ title, items, direction, gap }) => {
  return (
    <S.StyledFooterMenuItem>
      <h3>{title}</h3>
      <Menu items={items} direction={direction} gap={gap} />
    </S.StyledFooterMenuItem>
  )
}
