import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

const StyledAmazing = styled.section``

const AmazingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media ${theme.media.tablet} {
    align-items: center;
    gap: 32px;
  }
`

export const S = {
  StyledAmazing,
  AmazingContainer,
}
