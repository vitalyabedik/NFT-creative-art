import styled from 'styled-components'

import { FlexContainer, Span } from '@/components'
import { theme } from '@assets/styles/Theme'

type PropsType = {
  statistics: number
  description: string
}

export const StatItem = ({ statistics, description }: PropsType) => {
  return (
    <StyledStatItem>
      <StatItemContainer>
        <FlexContainer direction="column" gap="8px">
          <Statistic>
            <Span>{statistics}</Span>K
          </Statistic>
          <Description>{description}</Description>
        </FlexContainer>
      </StatItemContainer>
    </StyledStatItem>
  )
}

const StyledStatItem = styled.div`
  position: relative;
`

const StatItemContainer = styled.div`
  &::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 100%;
    background-color: ${theme.colors.accent};

    position: absolute;
    right: -24px;
    top: 0;
    z-index: 99999;
  }
`

const Statistic = styled.h2`
  background-color: gray;
`

const Description = styled.p`
  background-color: gray;
`
