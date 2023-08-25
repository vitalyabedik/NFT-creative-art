import styled from 'styled-components'

type PropsType = {
  titleWidth: string
}

export const SectionTitle = styled.h2<PropsType>`
  width: ${({ titleWidth }) => titleWidth || ''};
  text-align: left;
`
