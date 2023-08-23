import styled from 'styled-components'

import { FlexContainer, SectionHeader } from '@/components'
import { PopularImages } from '@layout/sections/popular/popularImages'

export const Popular = () => {
  return (
    <StyledPopular className="container">
      <FlexContainer direction="column" gap="64px">
        <SectionHeaderContainer>
          <SectionHeader
            title={
              <div>
                Popular <span>Artists</span> On This Week
              </div>
            }
            titleWidth="307px"
            align="center"
            justify="space-between"
          />
        </SectionHeaderContainer>
        <PopularImages />
      </FlexContainer>
    </StyledPopular>
  )
}

const StyledPopular = styled.section`
  background-color: #7d3a7d;
  padding: 92px 0;
`

const SectionHeaderContainer = styled.section`
  padding: 0 31.5px;
`
