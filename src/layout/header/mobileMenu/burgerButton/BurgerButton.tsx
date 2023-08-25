import styled, { css } from 'styled-components'

import { theme } from '@assets/styles/Theme'

export const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 999999;

  span {
    display: block;
    width: 24px;
    height: 2px;

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
