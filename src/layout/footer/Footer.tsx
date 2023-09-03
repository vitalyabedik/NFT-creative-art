import { Fade } from 'react-awesome-reveal'

import { S } from './Footer_Styles'

import { Container, FlexContainer } from '@/components'
import { Copyright } from '@layout/footer/copyright'
import { FooterContent } from '@layout/footer/footerContent'
import { FooterData } from '@layout/footer/footerData'
import { FooterMenu } from '@layout/footer/footerMenu'

export const Footer: React.FC = () => {
  return (
    <Fade delay={400} triggerOnce={true}>
      <S.StyledFooter>
        <Container>
          <FlexContainer direction="column" gap="48px">
            <S.FooterContentContainer>
              <S.FooterFlexContainer>
                <FooterContent socials={FooterData.socials} text={FooterData.text} />
                <FooterMenu menu={FooterData.menu} />
              </S.FooterFlexContainer>
            </S.FooterContentContainer>
            <Copyright />
          </FlexContainer>
        </Container>
      </S.StyledFooter>
    </Fade>
  )
}
