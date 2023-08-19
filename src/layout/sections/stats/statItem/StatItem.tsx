import styled from 'styled-components'

type PropsType = {
  statistics: number
  description: string
}

export const StatItem = ({ statistics, description }: PropsType) => {
  return (
    <StyledStatItem>
      <Statistic>
        {statistics}
        <span>K</span>
      </Statistic>
      <Description>{description}</Description>
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
