import { S } from './Header_Styles'

import { Button, Container, FlexContainer, Logo } from '@/components'
import { HeaderMenu } from '@layout/header/headerMenu/HeaderMenu'
import { MobileMenu } from '@layout/header/mobileMenu'

const headerItems = ['Marketplace', 'Artists', 'Community', 'Collections']

export const Header = () => {
  return (
    <S.Header>
      <Container>
        <FlexContainer justify="space-between" align="center">
          <Logo />
          <HeaderMenu items={headerItems} />
          <MobileMenu items={headerItems} />
          <S.ButtonContainer>
            <Button bntType="primary">Contact</Button>
          </S.ButtonContainer>
        </FlexContainer>
      </Container>
    </S.Header>
  )
}
