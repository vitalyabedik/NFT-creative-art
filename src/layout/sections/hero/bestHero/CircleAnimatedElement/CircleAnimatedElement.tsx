import ReactCurvedText from 'react-curved-text'

import { S } from './CircleAnimatedElement_Styles'

import { Icon } from '@/components'
import { theme } from '@assets/styles/Theme'

export const CircleAnimatedElement: React.FC = () => {
  return (
    <S.StyledCircleAnimatedElement>
      <S.IconContainer>
        <Icon iconId="star" width="35px" height="35px" viewBox="0 0 35 35" />
      </S.IconContainer>
      <S.CurvedTextContainer>
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
      </S.CurvedTextContainer>
    </S.StyledCircleAnimatedElement>
  )
}
