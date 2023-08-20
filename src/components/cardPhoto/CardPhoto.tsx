import styled from 'styled-components'

type PropsType = Partial<{
  width: string
  height: string
  borderRadius: string
}>

export const CardPhoto = styled.div<PropsType>`
  background-color: gray;
  width: ${({ width }) => width || '370px'};
  height: ${({ height }) => height || '340px'};
  border-radius: ${({ borderRadius }) => borderRadius || '16px'};
`
