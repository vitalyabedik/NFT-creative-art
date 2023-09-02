import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

const CopyrightFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 28px;

  @media ${theme.media.tablet} {
    gap: 20px;
  }

  @media ${theme.media.mobile} {
    flex-direction: column;
    gap: 16px;
  }
`

export const S = {
  CopyrightFlexContainer,
}
