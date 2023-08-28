import { useEffect, useState } from 'react'

import { S } from './Header_Styles'

import { Button, Container, FlexContainer, Logo } from '@/components'
import { DesktopMenu } from '@layout/header/headerMenu'
import { MobileMenu } from '@layout/header/headerMenu/mobileMenu'

const headerItems = ['Marketplace', 'Artists', 'Community', 'Collections']

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 820

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <S.Header>
      <Container>
        <FlexContainer justify="space-between" align="center">
          <Logo />
          {width < breakpoint ? (
            <MobileMenu items={headerItems} />
          ) : (
            <DesktopMenu items={headerItems} />
          )}
          <S.ButtonContainer>
            <Button bntType="primary">Contact</Button>
          </S.ButtonContainer>
        </FlexContainer>
      </Container>
    </S.Header>
  )
}
