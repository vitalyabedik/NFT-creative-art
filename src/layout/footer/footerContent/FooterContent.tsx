import styled from 'styled-components'

import { FlexContainer, Icon, Logo } from '@/components'
import { FooterSocialType } from '@layout/footer/footerData'

type PropsType = {
  socials: FooterSocialType[]
  text: string
}

export const FooterContent = ({ socials, text }: PropsType) => {
  return (
    <StyledFooterContent>
      <FlexContainer direction="column" gap="24px">
        <FooterMainContent>
          <Logo />
          <FooterContentText>{text}</FooterContentText>
        </FooterMainContent>
        <ul>
          <FlexContainer gap="12px">
            {socials.map(social => {
              return (
                <li key={social.id}>
                  <a href={social.link}>
                    <Icon iconId={social.title} />
                  </a>
                </li>
              )
            })}
          </FlexContainer>
        </ul>
      </FlexContainer>
    </StyledFooterContent>
  )
}

const StyledFooterContent = styled.div`
  width: 272px;
`

const FooterMainContent = styled.div``

const FooterContentText = styled.p``
