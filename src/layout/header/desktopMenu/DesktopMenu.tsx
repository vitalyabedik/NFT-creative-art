import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'
import { Menu } from '@layout/header/menu'

type PropsType = {
  items: string[]
}

export const DesktopMenu: React.FC<PropsType> = ({ items }) => {
  return (
    <StyledDesktopMenu>
      <Menu items={items} />
    </StyledDesktopMenu>
  )
}

const StyledDesktopMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  @media ${theme.media.extra.hideHeader} {
    display: none;
  }
`
