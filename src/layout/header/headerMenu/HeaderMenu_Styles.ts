import styled, { css } from 'styled-components'

import { font } from '@assets/styles/Common'
import { theme } from '@assets/styles/Theme'

const MenuItem = styled.li`
  position: relative;
`

// Menu
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

// MobileMenu
const StyledMobileMenu = styled.nav``

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  
  background-color: rgba(31, 31, 32, 0.9);
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
  z-index: 999999999;

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
  Link,
  MenuItem,
  StyledMobileMenu,
  MobileMenuPopup,
  BurgerButton,
  StyledDesktopMenu,
}
