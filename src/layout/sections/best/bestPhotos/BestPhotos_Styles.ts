import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

type PropsType = Partial<{
  isMobile: boolean
  isTabletSmall: boolean
  isTabletBig: boolean
  isDesktop: boolean
  height: string
}>

const StyledBestPhotos = styled.div<PropsType>`
  max-width: 740px;
  width: 100%;
  height: ${({ isMobile }) => (isMobile ? '343px' : '559px')};
  position: relative;

  @media ${theme.media.tablet} {
    height: 450px;
  }

  @media ${theme.media.mobile} {
    height: 400px;
  }

  @media ${theme.media.smallMobile} {
    height: 343px;
  }
`

export const S = {
  StyledBestPhotos,
}
