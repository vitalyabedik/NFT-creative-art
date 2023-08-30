import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

type PropsType = {
  titleWidth: string
}

export const SectionTitle = styled.h2<PropsType>`
  max-width: ${({ titleWidth }) => titleWidth || ''};
  text-align: left;

  @media ${theme.media.tablet} {
    text-align: center;
  }
`
