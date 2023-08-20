import styled from 'styled-components'

import { FlexContainer, SectionHeader } from '@/components'
import { PopularImages } from '@layout/sections/popular/popularImages'

export const Popular = () => {
  return (
    <StyledPopular className="container">
      <FlexContainer direction="column" gap="64px">
        <SectionHeaderContainer>
          <SectionHeader
            title={'Popular Artists\n' + 'On This Week'}
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
  background-color: #b239b2;
  padding: 92px 0;
`

const SectionHeaderContainer = styled.section`
  padding: 0 31.5px;
`
