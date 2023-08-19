import styled from 'styled-components'

import { FlexContainer } from '@/components'

type PropsType = {
  statistics: number
  description: string
}

export const StatItem = ({ statistics, description }: PropsType) => {
  return (
    <StyledStatItem>
      <FlexContainer direction="column" gap="8px">
        <Statistic>
          <span>{statistics}</span>K
        </Statistic>
        <Description>{description}</Description>
      </FlexContainer>
    </StyledStatItem>
  )
}

const StyledStatItem = styled.div``

const Statistic = styled.p`
  background-color: gray;
`

const Description = styled.p`
  background-color: gray;
`
