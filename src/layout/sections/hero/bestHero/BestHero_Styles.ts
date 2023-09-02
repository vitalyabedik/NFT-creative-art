import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

const StyledBestHero = styled.div`
  background-color: blue;
  position: relative;
`

const CardPhotoContainer = styled.div`
  max-width: 575px;
  width: 100%;
  height: 637px;

  @media ${theme.media.tablet} {
    &:first-child {
      height: 436px;
    }
`

export const S = {
  StyledBestHero,
  CardPhotoContainer,
}
