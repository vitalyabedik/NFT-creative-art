import { Link } from 'react-scroll'
import styled, { css } from 'styled-components'

import { font } from '@assets/styles/Common'
import { theme } from '@assets/styles/Theme'

const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

const MenuItem = styled.li`
  position: relative;
`

// Menu
export const NavLink = styled(Link)`
  &:hover,
  &.active {
    color: ${theme.colors.circleFont};

    position: relative;

    &::before {
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

// MobileMenu
const StyledMobileMenu = styled.nav``

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgb(0 0 0 /74%);
  display: none;
  z-index: 999999999;
  ${font({ Fmin: 24, Fmax: 24 })}

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
      background-color: rgb(0 0 0 /74%);
      ${font({ lineHeight: 3, Fmin: 24, Fmax: 24 })}
    `}
}
`

// BurgerButton
export const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 80px;
  right: 60px;
  width: 24px;
  height: 24px;
  z-index: 9999999999;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${theme.colors.circleFont};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${({ isOpen }) =>
      isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.circleFont};

      position: absolute;
      transform: translateY(-10px);

      ${({ isOpen }) =>
        isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.circleFont};

      position: absolute;
      transform: translateY(10px);

      ${({ isOpen }) =>
        isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
        `}
    }
  }
`

// DesktopMenu
const StyledDesktopMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`

export const S = {
  NavLink,
  MenuItems,
  MenuItem,
  StyledMobileMenu,
  MobileMenuPopup,
  BurgerButton,
  StyledDesktopMenu,
}
