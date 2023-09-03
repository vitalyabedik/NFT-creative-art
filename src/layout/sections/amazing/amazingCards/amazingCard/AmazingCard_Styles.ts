import styled from 'styled-components'

import { noHover, transition } from '@assets/styles/Common'
import { theme } from '@assets/styles/Theme'

const StyledAmazingCard = styled.div`
  width: 100%;
  max-width: 410px;
  min-height: 498px;
  padding: 20px;

  background-color: ${theme.colors.secondaryBg};
  border-radius: 28px;
  border-top: 1px solid ${theme.colors.accent};

  position: relative;

  &:hover {
    ${transition()}
    scale: 1.02;
    border: 1px solid ${theme.colors.accent};
  }

  &:not(:hover) {
    ${noHover()}
  }
`

const CardDescription = styled.div``

const CardInfo = styled.div``

const CardPrice = styled.div``

export const S = {
  StyledAmazingCard,
  CardDescription,
  CardInfo,
  CardPrice,
}
