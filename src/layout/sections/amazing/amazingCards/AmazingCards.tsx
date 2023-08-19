import styled from 'styled-components'

import { FlexContainer } from '@/components'
import { AmazingCard } from '@layout/sections/amazing/amazingCards/amazingCard'

export const AmazingCards = () => {
  return (
    <StyledAmazingCards>
      <FlexContainer justify="space-between">
        <AmazingCard />
        <AmazingCard />
        <AmazingCard />
      </FlexContainer>
    </StyledAmazingCards>
  )
}

const StyledAmazingCards = styled.div`
  background-color: coral;
`
