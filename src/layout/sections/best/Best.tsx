import styled from 'styled-components'

import { FlexContainer } from '@/components'
import { BestContent } from '@layout/sections/best/bestContent'
import { BestPhotos } from '@layout/sections/best/bestPhotos'

export const Best = () => {
  return (
    <StyledBest className="container">
      <FlexContainer justify="space-between" align="center">
        <BestContent />
        <BestPhotos />
      </FlexContainer>
    </StyledBest>
  )
}

const StyledBest = styled.section`
  background-color: #b239b2;
  padding: 92px 0;
`
