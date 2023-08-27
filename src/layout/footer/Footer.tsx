import styled from 'styled-components'

import { Container, FlexContainer } from '@/components'
import { theme } from '@assets/styles/Theme'
import { Copyright } from '@layout/footer/copyright'
import { FooterContent } from '@layout/footer/footerContent'
import { FooterData } from '@layout/footer/footerData'
import { FooterMenu } from '@layout/footer/footerMenu'

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexContainer direction="column" gap="48px">
          <FooterContentContainer>
            <FooterFlexContainer>
              <FooterContent socials={FooterData.socials} text={FooterData.text} />
              <FooterMenu menu={FooterData.menu} />
            </FooterFlexContainer>
          </FooterContentContainer>
          <Copyright />
        </FlexContainer>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 92px 16px;
`

const FooterContentContainer = styled.div`
  padding: 0 18.5px 48px 18.5px;
  border-bottom: 1px solid ${theme.colors.disabled};
`

const FooterFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 48px;

  @media ${theme.media.mobile} {
    flex-direction: column;
  }
`
