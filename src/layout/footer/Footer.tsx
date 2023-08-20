import styled from 'styled-components'

import { FlexContainer } from '@/components'
import { Copyright } from '@layout/footer/copyright'

export const Footer = () => {
  return (
    <StyledFooter className="container">
      <FlexContainer direction="column" gap="48px">
        <Copyright />
      </FlexContainer>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: darkolivegreen;
  padding: 92px 0;
`
