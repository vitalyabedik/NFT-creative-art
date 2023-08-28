import { S } from './StatItem_Styles'

import { FlexContainer, Span } from '@/components'

type PropsType = {
  statistics: number
  description: string
}

export const StatItem: React.FC<PropsType> = ({ statistics, description }) => {
  return (
    <S.StyledStatItem>
      <S.StatItemContainer>
        <FlexContainer direction="column" gap="8px">
          <S.Statistic>
            <Span>{statistics}</Span>K
          </S.Statistic>
          <S.Description>{description}</S.Description>
        </FlexContainer>
      </S.StatItemContainer>
    </S.StyledStatItem>
  )
}
