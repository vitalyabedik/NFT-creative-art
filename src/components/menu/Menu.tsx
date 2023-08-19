import styled from 'styled-components'

import { FlexContainer } from '@/components'

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <FlexContainer gap="40px">
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Artists</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Collections</a>
          </li>
        </FlexContainer>
      </ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav``
