import styled from 'styled-components'

import { Link } from '@/components'
import { theme } from '@assets/styles/Theme'

export const Copyright = () => {
  return (
    <CopyrightFlexContainer>
      <Link link="#">© Copyright 2023 - Creativeart</Link>
      <CopyrightFlexContainer>
        <Link link="#">Privacy Policy</Link>
        <Link link="#">Terms & Conditions</Link>
      </CopyrightFlexContainer>
    </CopyrightFlexContainer>
  )
}

const CopyrightFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 28px;

  @media ${theme.media.mobile} {
    flex-direction: column;
    gap: 16px;
  }
`
