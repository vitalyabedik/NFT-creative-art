import ReactCurvedText from 'react-curved-text'
import styled from 'styled-components'

import { Icon } from '@/components'
import { font } from '@assets/styles/Common'
import { theme } from '@assets/styles/Theme'

export const CircleAnimatedElement = () => {
  return (
    <StyledCircleAnimatedElement>
      <IconContainer>
        <Icon iconId="star" width="35px" height="35px" viewBox="0 0 35px 35px" />
      </IconContainer>
      <CurvedTextContainer>
        <ReactCurvedText
          width={172}
          height={172}
          cx={86}
          cy={86}
          rx={86}
          ry={86}
          startOffset={0}
          reversed={true}
          text="A r t w o r k o f t h e w e e k A r t w o r k o f t h e w e e k "
          textProps={{ style: { fontSize: 23, fill: theme.colors.circleFont } }}
          tspanProps={{ dy: 17 }}
          svgProps={{ style: { transform: 'rotate(0deg)' } }}
        />
      </CurvedTextContainer>
    </StyledCircleAnimatedElement>
  )
}

export const StyledCircleAnimatedElement = styled.div`
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

export const IconContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CurvedTextContainer = styled.div`
  position: absolute;
  top: 0;
  ${font({
    family: 'Source Sans Pro',
  })}
`
