import styled, { css } from 'styled-components'

import { theme } from '@assets/styles/Theme'

type PropsType = {
  isScrolled: boolean
}

const Header = styled.header<PropsType>`
  padding: 18px 16px;

  ${({ isScrolled }) =>
    isScrolled &&
    css<PropsType>`
      background-color: rgb(0 0 0 /74%);
      width: 100%;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 100;
    `}
`

const ButtonContainer = styled.div`
  @media ${theme.media.extra.hideHeader} {
    display: none;
  }
`

export const S = {
  Header,
  ButtonContainer,
}
