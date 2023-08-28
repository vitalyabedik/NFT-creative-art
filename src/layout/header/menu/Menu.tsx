import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

type PropsType = {
  items: string[]
}

export const Menu: React.FC<PropsType> = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <MenuItem key={item}>
            <Link href="#">{item}</Link>
          </MenuItem>
        )
      })}
    </ul>
  )
}

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
