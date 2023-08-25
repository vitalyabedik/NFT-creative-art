import styled from 'styled-components'

import { Menu } from '@/components'

type PropsType = {
  title: string
  items: string[]
  direction?: string
  gap?: string
}

export const FooterMenuItem = ({ title, items, direction, gap }: PropsType) => {
  return (
    <StyledFooterMenuItem>
      <h3>{title}</h3>
      <Menu items={items} direction={direction} gap={gap} />
    </StyledFooterMenuItem>
  )
}

const StyledFooterMenuItem = styled.div`
  background-color: coral;
  display: flex;
  flex-direction: column;
  gap: 24px;
`
