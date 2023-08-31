import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

type PropsType = Partial<{
  isMobile: boolean
  isTabletSmall: boolean
  isTabletBig: boolean
  isDesktop: boolean
  height: string
}>

const StyledSubscribePhotos = styled.div<PropsType>`
  max-width: 630px;
  width: 100%;
  height: 458px;
  position: relative;

  @media ${theme.media.tablet} {
    height: 400px;
  }

  @media ${theme.media.mobile} {
    height: 350px;
  }

  @media ${theme.media.smallMobile} {
    height: 250px;
  }
`

export const S = {
  StyledSubscribePhotos,
}
