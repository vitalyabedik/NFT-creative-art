import styled from 'styled-components'

import { Container, FlexContainer } from '@/components'
import { Copyright } from '@layout/footer/copyright'
import { FooterContent } from '@layout/footer/footerContent'
import { FooterMenu } from '@layout/footer/footerMenu'

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexContainer direction="column" gap="48px">
          <FooterContentContainer>
            <FlexContainer justify="space-between">
              <FooterContent />
              <FooterMenu />
            </FlexContainer>
          </FooterContentContainer>
          <Copyright />
        </FlexContainer>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: darkolivegreen;
  padding: 92px 0;
`

const FooterContentContainer = styled.div`
  padding: 0 18.5px 48px 18.5px;
  border-bottom: 1px solid var(--white-dissable, #838382);
`
