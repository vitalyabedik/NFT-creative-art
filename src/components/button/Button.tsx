import styled, { css } from 'styled-components'

import { font, transition } from '@assets/styles/Common'
import { theme } from '@assets/styles/Theme'

type ButtonType = 'primary' | 'outlined' | 'link'

type PropsType = {
  color?: string
  backgroundColor?: string
  borderRadius?: string
  fontSize?: string
  bntType: ButtonType
}

export const Button = styled.button<PropsType>`
  display: block;
  ${font({
    family: "'Inter', sans-serif",
    weight: 700,
    lineHeight: 1.2,
    Fmax: 16,
    Fmin: 16,
  })}
  ${transition()}
  position: relative;
  border-radius: ${({ borderRadius }) => borderRadius || theme.borderRadius.button};
  padding: 12px 40px;
  cursor: pointer;

  ${({ bntType }) =>
    bntType === 'outlined' &&
    css<PropsType>`
      background-color: transparent;
      color: ${({ color }) => color || theme.colors.accent};
      border: 1px solid ${theme.colors.accent};

      &:hover {
        background-color: ${theme.colors.accent};
        color: ${theme.colors.primaryBg};
      }
    `}

  ${({ bntType }) =>
    bntType === 'primary' &&
    css<PropsType>`
      background-color: ${({ backgroundColor }) => backgroundColor || theme.colors.accent};
      color: ${theme.colors.primaryBg};

      &:hover {
        opacity: 0.8;
      }
    `}

  ${({ bntType }) =>
    bntType === 'link' &&
    css<PropsType>`
      padding: 0;
      background-color: transparent;

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
    `}
`
