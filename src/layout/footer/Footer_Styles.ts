import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

const StyledFooter = styled.footer`
  padding: 92px 16px;

  @media ${theme.media.tablet} {
    padding: 40px 16px;
  }
`

const FooterContentContainer = styled.div`
  padding: 0 18.5px 48px 18.5px;
  border-bottom: 1px solid ${theme.colors.disabled};
`

const FooterFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 48px;

  @media ${theme.media.mobile} {
    flex-direction: column;
  }
`

export const S = {
  StyledFooter,
  FooterContentContainer,
  FooterFlexContainer,
}
