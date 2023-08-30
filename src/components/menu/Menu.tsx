import styled from 'styled-components'

import { FlexContainer, Link } from '@/components'

type PropsType = {
  items: string[]
  direction?: string
  gap?: string
}

export const Menu: React.FC<PropsType> = ({ items, direction = 'column', gap = '8px' }) => {
  const menuItems = items.map(item => {
    return (
      <MenuItem key={item}>
        <Link link="#">{item}</Link>
      </MenuItem>
    )
  })

  return (
    <ul>
      <FlexContainer direction={direction} gap={gap}>
        {menuItems}
      </FlexContainer>
    </ul>
  )
}

const MenuItem = styled.li`
  position: relative;
`
