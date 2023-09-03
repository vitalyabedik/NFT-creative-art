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
  const isUltaSmallMobile = useWindowWidth(374)
  let gap

  if (isUltaSmallMobile) {
    gap = '45px'
  } else if (isMobile) {
    gap = '56px'
  } else {
    gap = '94px'
  }

  return (
    <FlexContainer gap={gap}>
      {hero.stats.map(stat => {
        return <StatItem key={stat.id} statistics={stat.value} description={stat.type} />
      })}
    </FlexContainer>
  )
}
