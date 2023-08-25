import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

type PropsType = {
  items: string[]
}

export const HeaderMenu = ({ items }: PropsType) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {items.map(item => {
          return (
            <MenuItem key={item}>
              <Link href="#">{item}</Link>
            </MenuItem>
          )
        })}
      </ul>
    </StyledHeaderMenu>
  )
}

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  @media ${theme.media.hideHeader} {
    display: none;
  }
`

const MenuItem = styled.li`
  position: relative;
`

const Link = styled.a`
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
