import ReactCurvedText from 'react-curved-text'

import { S } from './CircleAnimatedElement_Styles'

import { Icon } from '@/components'
import { useWindowWidth } from '@/hooks'
import { theme } from '@assets/styles/Theme'

export const CircleAnimatedElement: React.FC = () => {
  const isTablet = useWindowWidth(768)

  return (
    <S.StyledCircleAnimatedElement>
      <S.IconContainer>
        <Icon
          iconId="star"
          width={!isTablet ? '35px' : '20px'}
          height={!isTablet ? '35px' : '20px'}
          viewBox={!isTablet ? '0 0 35 35' : '0 0 35 35'}
        />
      </S.IconContainer>
      <S.CurvedTextContainer>
        <ReactCurvedText
          width={!isTablet ? 172 : 82}
          height={!isTablet ? 172 : 82}
          cx={!isTablet ? 86 : 41}
          cy={!isTablet ? 86 : 41}
          rx={!isTablet ? 86 : 24}
          ry={!isTablet ? 86 : 24}
          startOffset={0}
          reversed={true}
          text={
            !isTablet
              ? 'A r t w o r k o f t h e w e e k A r t w o r k o f t h e w e e k '
              : 'Artworkoftheweek'
          }
          textProps={{ style: { fontSize: !isTablet ? 23 : 19, fill: theme.colors.circleFont } }}
          tspanProps={{ dy: !isTablet ? 15 : -3 }}
          svgProps={{ style: { transform: 'rotate(0deg)' } }}
        />
      </S.CurvedTextContainer>
    </S.StyledCircleAnimatedElement>
  )
}
