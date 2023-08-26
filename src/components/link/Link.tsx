import styled from 'styled-components'

import { font } from '@assets/styles/Common'

export const Link = styled.a`
  ${font({
    weight: 700,
    lineHeight: 1.2,
    Fmax: 16,
    Fmin: 16,
  })}
  padding: 0;
  background-color: transparent;
`
