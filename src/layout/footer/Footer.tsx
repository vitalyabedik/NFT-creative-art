import styled from 'styled-components'

import { FlexContainer } from '@/components'
import { Copyright } from '@layout/footer/copyright'
import { FooterContent } from '@layout/footer/footerContent'
import { FooterMenu } from '@layout/footer/footerMenu'

export const Footer = () => {
  return (
    <StyledFooter className="container">
      <FlexContainer direction="column" gap="48px">
        <FooterContentContainer>
          <FlexContainer justify="space-between">
            <FooterContent />
            <FooterMenu />
          </FlexContainer>
        </FooterContentContainer>
        <Copyright />
      </FlexContainer>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: darkolivegreen;
  padding: 92px 0;
`

const FooterContentContainer = styled.footer`
  padding: 0 18.5px 48px 18.5px;
  border-bottom: 1px solid var(--white-dissable, #838382);
`