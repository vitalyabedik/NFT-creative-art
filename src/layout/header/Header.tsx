import { S } from './Header_Styles'

import { Button, Container, FlexContainer, Logo } from '@/components'
import { useWindowWidth } from '@/hooks'
import { DesktopMenu } from '@layout/header/headerMenu'
import { MobileMenu } from '@layout/header/headerMenu/mobileMenu'

const headerItems = ['Marketplace', 'Artists', 'Community', 'Collections']

export const Header: React.FC = () => {
  const isMobile = useWindowWidth(820)

  return (
    <S.Header>
      <Container>
        <FlexContainer justify="space-between" align="center">
          <Logo />
          {isMobile ? <MobileMenu items={headerItems} /> : <DesktopMenu items={headerItems} />}
          <S.ButtonContainer>
            <Button bntType="primary">Contact</Button>
          </S.ButtonContainer>
        </FlexContainer>
      </Container>
    </S.Header>
  )
}
