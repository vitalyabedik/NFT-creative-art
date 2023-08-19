import styled from 'styled-components'

import { FlexContainer } from '@/components'
import { StatItem } from '@layout/sections/hero/content/stats/statItem'

export const Stats = () => {
  return (
    <StyledStats>
      <FlexContainer gap="94px">
        <StatItem statistics={8.9} description="Art work" />
        <StatItem statistics={65} description="Artist" />
        <StatItem statistics={87} description="Collection" />
      </FlexContainer>
    </StyledStats>
  )
}

const StyledStats = styled.div`
  background-color: #ac5959;
`
