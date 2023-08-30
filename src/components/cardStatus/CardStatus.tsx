import * as React from 'react'

import styled, { css } from 'styled-components'

import { FlexContainer, Icon } from '@/components'
import { font } from '@assets/styles/Common'
import { theme } from '@assets/styles/Theme'

type PropsType = {
  title?: string
  value?: string | number
  paddingBottom?: string
  showIcon?: boolean
}

export const CardStatus: React.FC<PropsType> = ({ title, value, showIcon, paddingBottom }) => {
  return (
    <StyledCardStatus>
      <CardStatusTitle paddingBottom={paddingBottom} showIcon={showIcon}>
        {title}
      </CardStatusTitle>
      <FlexContainer align="center" gap={showIcon ? '12px' : '0'}>
        {showIcon && <Icon iconId="clock" />}
        <h5>{value}</h5>
      </FlexContainer>
    </StyledCardStatus>
  )
}

const StyledCardStatus = styled.div``

const CardStatusTitle = styled.span<{
  paddingBottom?: string
  showIcon?: boolean
}>`
  ${font({
    weight: 500,
    color: theme.colors.disabled,
    Fmax: 14,
    Fmin: 14,
  })}
  padding-bottom: ${({ paddingBottom }) => paddingBottom || '8px'};

  ${({ showIcon }) =>
    !showIcon &&
    css<PropsType>`
      color: ${theme.colors.accent};
    `}
`
