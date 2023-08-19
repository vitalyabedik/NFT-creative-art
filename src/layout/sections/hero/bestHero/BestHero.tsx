import styled from 'styled-components'

import { CardPhoto } from '@components/cardPhoto'
import { CircleAnimatedElement } from '@layout/sections/hero/bestHero/CircleAnimatedElement'
import { Promotion } from '@layout/sections/hero/bestHero/promotion'

export const BestHero = () => {
  return (
    <StyledBestHero>
      <CardPhoto height="548px" width="464px" borderRadius="24px" />
      <CircleAnimatedElement />
      <Promotion />
    </StyledBestHero>
  )
}

const StyledBestHero = styled.div`
  margin: 0 51px 93px 60px;
  position: relative;
`
