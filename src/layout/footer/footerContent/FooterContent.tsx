import * as React from 'react'

import { S } from './FooterContent_Styles'

import { FlexContainer, Icon, Logo } from '@/components'
import { FooterSocialType } from '@layout/footer/footerData'

type PropsType = {
  socials: FooterSocialType[]
  text: string
}

export const FooterContent: React.FC<PropsType> = ({ socials, text }) => {
  return (
    <S.StyledFooterContent>
      <FlexContainer direction="column" gap="24px">
        <S.FooterMainContent>
          <Logo />
          <S.FooterContentText>{text}</S.FooterContentText>
        </S.FooterMainContent>
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
    </S.StyledFooterContent>
  )
}
