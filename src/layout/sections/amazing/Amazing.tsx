import styled from 'styled-components'

import { FlexContainer, SectionHeader } from '@/components'
import { AmazingCards } from '@layout/sections/amazing/amazingCards'

export const Amazing = () => {
  return (
    <StyledAmazing className="container">
      <FlexContainer direction="column" gap="64px">
        <SectionHeader
          title="Amazing and Super Unique Art of This Week"
          titleWidth="426px"
          justify="space-between"
          align="flex-end"
        />
        <AmazingCards />
      </FlexContainer>
    </StyledAmazing>
  )
}

const StyledAmazing = styled.section`
  background-color: #b239b2;
  padding: 92px 0;
`
