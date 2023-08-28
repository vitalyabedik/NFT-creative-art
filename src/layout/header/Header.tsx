import { S } from './Header_Styles'

import { Button, Container, FlexContainer, Logo } from '@/components'
import { DesktopMenu } from '@layout/header/desktopMenu/DesktopMenu'
import { MobileMenu } from '@layout/header/mobileMenu'

const headerItems = ['Marketplace', 'Artists', 'Community', 'Collections']

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <FlexContainer justify="space-between" align="center">
          <Logo />
          <DesktopMenu items={headerItems} />
          <MobileMenu items={headerItems} />
          <S.ButtonContainer>
            <Button bntType="primary">Contact</Button>
          </S.ButtonContainer>
        </FlexContainer>
      </Container>
    </S.Header>
  )
}
