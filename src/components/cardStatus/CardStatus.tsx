import styled from 'styled-components'

import { FlexContainer, Icon } from '@/components'

type PropsType = {
  title: string
  value: string
  paddingBottom?: string
  showIcon?: boolean
}

export const CardStatus = ({ title, value, showIcon, paddingBottom }: PropsType) => {
  return (
    <StyledCardStatus>
      <CardStatusTitle paddingBottom={paddingBottom}>{title}</CardStatusTitle>
      <FlexContainer align="center" gap={showIcon ? '12px' : '0'}>
        <CardStatusIcon>{showIcon && <Icon iconId="clock" />}</CardStatusIcon>
        <CardStatusValue>{value}</CardStatusValue>
      </FlexContainer>
    </StyledCardStatus>
  )
}

const StyledCardStatus = styled.div`
  background-color: #ac5050;
`

const CardStatusTitle = styled.div<{ paddingBottom?: string }>`
  background-color: #4979a3;
  padding-bottom: ${({ paddingBottom }) => paddingBottom || '8px'};
`

const CardStatusValue = styled.div`
  background-color: #4979a3;
`

const CardStatusIcon = styled.div`
  background-color: #4979a3;
`
