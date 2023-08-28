import styled from 'styled-components'

import { font } from '@assets/styles/Common'

const StyledCircleAnimatedElement = styled.div`
  width: 174px;
  height: 174px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(100%);

  animation: rotateAnimation 15s linear infinite;

  @keyframes rotateAnimation {
    from {
      transform: translateY(100%) rotate(0deg);
    }
    to {
      transform: translateY(100%) rotate(360deg);
    }
  }
`

const IconContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CurvedTextContainer = styled.div`
  position: absolute;
  top: 0;
  ${font({
    family: 'Source Sans Pro',
  })}
`

export const S = {
  StyledCircleAnimatedElement,
  IconContainer,
  CurvedTextContainer,
}
