import * as React from 'react'

import { S } from './FooterMenu_Styles'

import { FooterMenuType } from '@layout/footer/footerData'
import { FooterMenuItem } from '@layout/footer/footerMenu/footerMenuItem'

type PropsType = {
  menu: FooterMenuType[]
}

export const FooterMenu: React.FC<PropsType> = ({ menu }) => {
  return (
    <S.FooterMenuWrapper>
      {menu.map(menuEl => {
        return <FooterMenuItem key={menuEl.id} title={menuEl.title} items={menuEl.items} />
      })}
    </S.FooterMenuWrapper>
  )
}
