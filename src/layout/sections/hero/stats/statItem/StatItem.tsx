import { FlexContainer, Span } from '@/components'
import { S } from '@layout/sections/hero/stats/statItem/StatItem_Styles'

type PropsType = {
  statistics: number
  description: string
}

export const StatItem: React.FC<PropsType> = ({ statistics, description }) => {
  return (
    <S.StyledStatItem>
      <S.StatItemContainer>
        <FlexContainer direction="column" gap="8px">
          <h2>
            <Span>{statistics}</Span>K
          </h2>
          <p>{description}</p>
        </FlexContainer>
      </S.StatItemContainer>
    </S.StyledStatItem>
  )
}
