import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

const FooterMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 94px;

  @media ${theme.media.extra.footerDesktop} {
    display: flex;
    gap: 48px;
  }

  @media ${theme.media.extra.footerTablet} {
    flex-wrap: wrap;
    gap: 24px;
  }

  @media ${theme.media.mobile} {
    max-width: 106px;
  }
`

export const S = {
  FooterMenuWrapper,
}
