import * as React from 'react'

import { FlexContainer } from '@/components'
import { useWindowWidth } from '@/hooks'
import { HeroType } from '@layout/sections/hero/heroData/HeroData'
import { StatItem } from '@layout/sections/hero/stats/statItem'

type PropsType = {
  hero: HeroType
}

export const Stats: React.FC<PropsType> = ({ hero }) => {
  const isMobile = useWindowWidth(576)

  return (
    <FlexContainer gap={isMobile ? '56.5px' : '94px'}>
      {hero.stats.map(stat => {
        return <StatItem key={stat.id} statistics={stat.value} description={stat.type} />
      })}
    </FlexContainer>
  )
}
