import styled from 'styled-components'

import { Button, FlexContainer, Logo, Menu } from '@/components'

export const Header = () => {
  return (
    <StyledHeader className="container">
      <FlexContainer justify="space-between" align="center">
        <Logo />
        <Menu />
        <Button />
      </FlexContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: #c16c6c;
`
