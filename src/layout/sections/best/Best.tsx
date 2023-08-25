import styled from 'styled-components'

import { Container, FlexContainer } from '@/components'
import { BestContent } from '@layout/sections/best/bestContent'
import { BestPhotos } from '@layout/sections/best/bestPhotos'

export const Best = () => {
  return (
    <StyledBest>
      <Container>
        <FlexContainer justify="space-between" align="center">
          <BestContent />
          <BestPhotos />
        </FlexContainer>
      </Container>
    </StyledBest>
  )
}

const StyledBest = styled.section`
  background-color: #b239b2;
`
