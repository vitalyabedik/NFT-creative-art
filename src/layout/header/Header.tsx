import { Fade } from 'react-awesome-reveal'

import { S } from './Header_Styles'

import { Button, Container, FlexContainer, Logo } from '@/components'
import { useWindowScroll, useWindowWidth } from '@/hooks'
import { DesktopMenu } from '@layout/header/headerMenu'
import { MobileMenu } from '@layout/header/headerMenu/mobileMenu'

const headerItems: HeaderItemType[] = [
  { title: 'Marketplace', href: 'home' },
  { title: 'Artists', href: 'amazing' },
  { title: 'Community', href: 'best' },
  { title: 'Collections', href: 'popular' },
]

export const Header: React.FC = () => {
  const isMobile = useWindowWidth(820)
  const changeBackground = useWindowScroll()

  return (
    <Fade delay={400} triggerOnce={true}>
      <S.Header isScrolled={changeBackground}>
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
    </Fade>
  )
}

// types
export type HeaderItemType = {
  title: string
  href: string
}
