import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

const StyledStatItem = styled.div`
  position: relative;
`

const StatItemContainer = styled.div`
  &::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 100%;
    background-color: ${theme.colors.accent};

    position: absolute;
    right: -24px;
    top: 0;
    z-index: 10;

    @media ${theme.media.ultraSmallMobile} {
      right: -15px;
    }
  }
`

export const S = {
  StyledStatItem,
  StatItemContainer,
}
