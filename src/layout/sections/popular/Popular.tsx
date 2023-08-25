import styled from 'styled-components'

import { Container, FlexContainer, SectionHeader, Span } from '@/components'
import { PopularImages } from '@layout/sections/popular/popularImages'

export const Popular = () => {
  return (
    <StyledPopular>
      <Container>
        <FlexContainer direction="column" gap="64px">
          <SectionHeaderContainer>
            <SectionHeader
              title={
                <div>
                  Popular <Span>Artists</Span> On This Week
                </div>
              }
              titleWidth="307px"
              align="center"
              justify="space-between"
            />
          </SectionHeaderContainer>
          <PopularImages />
        </FlexContainer>
      </Container>
    </StyledPopular>
  )
}

const StyledPopular = styled.section`
  background-color: #7d3a7d;
`

const SectionHeaderContainer = styled.section`
  padding: 0 31.5px;
`
