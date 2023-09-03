import { useState } from 'react'

import { S } from '../HeaderMenu_Styles'

import { HeaderItemType } from '@layout/header'
import { Menu } from '@layout/header/headerMenu/menu'

type PropsType = {
  items: HeaderItemType[]
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
        <Menu items={items} closeMenu={onClickPopUpHandler} />
      </S.MobileMenuPopup>
    </S.StyledMobileMenu>
  )
}
