import * as React from 'react'

import styled from 'styled-components'

import { Button, Container, FlexContainer, SectionHeader, Span } from '@/components'
import { useWindowWidth } from '@/hooks'
import { PopularData } from '@layout/sections/popular/popularData/PopularData'
import { PopularImages } from '@layout/sections/popular/popularImages'

export const Popular: React.FC = () => {
  const isTablet = useWindowWidth(768)

  return (
    <StyledPopular>
      <Container>
        <FlexContainer direction="column" gap={isTablet ? '32px' : '64px'}>
          <SectionHeader
            title={
              <div>
                Popular <Span>Artists</Span> On This Week
              </div>
            }
            titleWidth="307px"
            isVisibleButton={isTablet}
            align="center"
            justify={isTablet ? 'center' : 'space-between'}
          />
          <PopularImages popularData={PopularData} />
          {isTablet && (
            <FlexContainer justify="center">
              <Button bntType="primary">{'See all'}</Button>
            </FlexContainer>
          )}
        </FlexContainer>
      </Container>
    </StyledPopular>
  )
}

const StyledPopular = styled.section`
  background-color: green;
`
