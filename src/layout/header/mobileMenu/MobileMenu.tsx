import { useState } from 'react'

import styled, { css } from 'styled-components'

import { theme } from '@assets/styles/Theme'
import { BurgerButton } from '@layout/header/mobileMenu/burgerButton'

type PropsType = {
  items: string[]
}

export const MobileMenu = ({ items }: PropsType) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const onClickBurgerHandler = () => setMenuIsOpen(!menuIsOpen)

  const onClickPopUpHandler = () => setMenuIsOpen(false)

  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={menuIsOpen} onClick={onClickBurgerHandler}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={menuIsOpen} onClick={onClickPopUpHandler}>
        <ul>
          {items.map(item => {
            return (
              <MenuItem key={item}>
                <Link href="#">{item}</Link>
              </MenuItem>
            )
          })}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  )
}

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.extra.hideHeader} {
    display: block;
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  
  background-color: rgba(31, 31, 32, 0.9);
  display: none;
  z-index: 99999;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  
  ${({ isOpen }) =>
    isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
    `}
}
`

const MenuItem = styled.li`
  position: relative;
`

const Link = styled.a`
  &:hover {
    color: ${theme.colors.circleFont};

    &::before {
      content: '';
      display: inline-block;
      height: 1px;
      width: 100%;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: 0;
    }
  }
`
