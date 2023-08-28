import * as React from 'react'

import styled from 'styled-components'

import { FlexContainer } from '@/components'
import { StatItem } from '@layout/sections/hero/heroContent/stats/statItem'
import { HeroType } from '@layout/sections/hero/heroData/HeroData'

type PropsType = {
  hero: HeroType
}

export const Stats: React.FC<PropsType> = ({ hero }) => {
  return (
    <StyledStats>
      <FlexContainer gap="94px">
        {hero.stats.map(stat => {
          return <StatItem key={stat.id} statistics={stat.value} description={stat.type} />
        })}
      </FlexContainer>
    </StyledStats>
  )
}

const StyledStats = styled.div`
  background-color: #ac5959;
`