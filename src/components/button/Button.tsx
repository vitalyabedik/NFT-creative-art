import styled, { css } from 'styled-components'

import { font } from '@assets/styles/Common'
import { theme } from '@assets/styles/Theme'

type ButtonType = 'primary' | 'outlined'

type PropsType = {
  color?: string
  backgroundColor?: string
  borderRadius?: string
  fontSize?: string
  type: ButtonType
}

export const Button = styled.button<PropsType>`
  ${font({
    family: "'Inter', sans-serif",
    weight: 700,
    lineHeight: 1.2,
    Fmax: 16,
    Fmin: 16,
  })}
  border-radius: ${({ borderRadius }) => borderRadius || theme.borderRadius.button};
  padding: 12px 40px;
  cursor: pointer;

  ${({ type }) =>
    type === 'outlined' &&
    css<PropsType>`
      background-color: transparent;
      color: ${({ color }) => color || theme.colors.accent};

      &:hover {
        background-color: ${theme.colors.accent};
        color: ${theme.colors.primaryBg};
      }
    `}

  ${({ type }) =>
    type === 'primary' &&
    css<PropsType>`
      background-color: ${({ backgroundColor }) => backgroundColor || theme.colors.accent};
      color: ${theme.colors.primaryBg};

      &:hover {
        opacity: 0.9;
      }
    `}
`
