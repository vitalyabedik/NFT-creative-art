import styled from 'styled-components'

type PropsType = Partial<{
  direction: string
  justify: string
  align: string
  wrap: string
  gap: string
}>

export const FlexContainer = styled.div<PropsType>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  flex-wrap: ${({ wrap }) => wrap || 'wrap'};
  gap: ${({ gap }) => gap || '0px'};
`
