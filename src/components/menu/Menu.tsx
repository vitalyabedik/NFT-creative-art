import styled from 'styled-components'

import { FlexContainer } from '@/components'
import { theme } from '@assets/styles/Theme'

type PropsType = {
  items: string[]
  direction?: string
  gap?: string
}

export const Menu = ({ items, direction = 'column', gap = '8px' }: PropsType) => {
  const menuItems = items.map(item => {
    return (
      <MenuItem key={item}>
        <MenuLink href="#">{item}</MenuLink>
      </MenuItem>
    )
  })

  return (
    <StyledMenu>
      <ul>
        <FlexContainer direction={direction} gap={gap}>
          {menuItems}
        </FlexContainer>
      </ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  @media ${theme.media.hideHeader} {
    display: none;
  }
`

const MenuItem = styled.li`
  position: relative;
`

const MenuLink = styled.a`
  &:hover {
    color: ${theme.colors.circleFont};

    &::before {
      content: '';
      display: inline-block;
      height: 1px;
      width: 100%;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: 0;
    }
  }
`
