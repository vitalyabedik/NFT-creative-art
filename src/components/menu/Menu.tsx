import styled from 'styled-components'

import { FlexContainer } from '@/components'

type PropsType = {
  items: string[]
  direction?: string
  gap?: string
}

export const Menu = ({ items, direction = 'column', gap = '8px' }: PropsType) => {
  const menuItems = items.map(item => {
    return (
      <li key={item}>
        <a href="#">{item}</a>
      </li>
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

const StyledMenu = styled.nav``
