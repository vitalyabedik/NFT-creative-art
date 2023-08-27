import styled from 'styled-components'

import { FlexContainer, Link } from '@/components'

type PropsType = {
  items: string[]
  direction?: string
  gap?: string
}

export const Menu = ({ items, direction = 'column', gap = '8px' }: PropsType) => {
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
