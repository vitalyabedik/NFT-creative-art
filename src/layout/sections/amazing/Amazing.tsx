import styled from 'styled-components'

import { Container, FlexContainer, SectionHeader } from '@/components'
import { AmazingCards } from '@layout/sections/amazing/amazingCards'

export const Amazing = () => {
  return (
    <StyledAmazing>
      <Container>
        <FlexContainer direction="column" gap="64px">
          <SectionHeader
            title={
              <div>
                <span>Amazing</span> and Super Unique Art of This <span>Week</span>{' '}
              </div>
            }
            titleWidth="426px"
            justify="space-between"
            align="flex-end"
          />
          <AmazingCards />
        </FlexContainer>
      </Container>
    </StyledAmazing>
  )
}

const StyledAmazing = styled.section`
  background-color: #b239b2;
`
