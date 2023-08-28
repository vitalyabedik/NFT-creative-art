import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

const Header = styled.header`
  padding: 18px 16px;
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
