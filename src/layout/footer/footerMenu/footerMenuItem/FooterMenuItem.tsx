import styled from 'styled-components'

import { FlexContainer, Menu } from '@/components'

type PropsType = {
  title: string
  items: string[]
  direction?: string
  gap?: string
}

export const FooterMenuItem = ({ title, items, direction, gap }: PropsType) => {
  return (
    <StyledFooterMenuItem>
      <FlexContainer direction="column" gap="24px">
        <FooterMenuTitle>{title}</FooterMenuTitle>
        <Menu items={items} direction={direction} gap={gap} />
      </FlexContainer>
    </StyledFooterMenuItem>
  )
}

const StyledFooterMenuItem = styled.div`
  background-color: coral;
`

const FooterMenuTitle = styled.h3`
  background-color: gray;
`
