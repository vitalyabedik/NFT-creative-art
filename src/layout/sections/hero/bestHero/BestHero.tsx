import styled from 'styled-components'

import { CircleAnimatedElement } from '@layout/sections/hero/bestHero/CircleAnimatedElement'
import { Promotion } from '@layout/sections/hero/bestHero/promotion'

export const BestHero = () => {
  return (
    <StyledBestHero>
      <Photo />
      <CircleAnimatedElement />
      <Promotion />
    </StyledBestHero>
  )
}

const StyledBestHero = styled.div`
  background-color: aqua;
  margin: 0 51px 93px 60px;
  position: relative;
`

const Photo = styled.img`
  height: 544px;
  width: 464px;
  background-color: gray;
  border: 24px;
`
