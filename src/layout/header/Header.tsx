import styled from 'styled-components'

import { Button, FlexContainer, Logo } from '@/components'
import { theme } from '@assets/styles/Theme'
import { HeaderMenu } from '@layout/header/headerMenu/HeaderMenu'
import { MobileMenu } from '@layout/header/mobileMenu'

const headerItems = ['Marketplace', 'Artists', 'Community', 'Collections']

export const Header = () => {
  return (
    <StyledHeader className="container">
      <FlexContainer justify="space-between" align="center">
        <Logo />
        <HeaderMenu items={headerItems} />
        <MobileMenu items={headerItems} />
        <ButtonContainer>
          <Button bntType="primary">Contact</Button>
        </ButtonContainer>
      </FlexContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: red;
`

const ButtonContainer = styled.div`
  @media ${theme.media.hideHeader} {
    display: none;
  }
`
