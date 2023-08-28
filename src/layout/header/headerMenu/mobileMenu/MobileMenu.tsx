import { useState } from 'react'
import * as React from 'react'

import { S } from '../HeaderMenu_Styles'

import { Menu } from '@layout/header/headerMenu/menu'

type PropsType = {
  items: string[]
}

export const MobileMenu: React.FC<PropsType> = ({ items }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const onClickBurgerHandler = () => setMenuIsOpen(!menuIsOpen)

  const onClickPopUpHandler = () => setMenuIsOpen(false)

  return (
    <S.StyledMobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onClickBurgerHandler}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={menuIsOpen} onClick={onClickPopUpHandler}>
        <Menu items={items} />
      </S.MobileMenuPopup>
    </S.StyledMobileMenu>
  )
}
