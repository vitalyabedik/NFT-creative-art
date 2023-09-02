import * as React from 'react'

import { S } from './BestPhotos_Styles'

import { CardPhoto, CardImage } from '@/components'
import { useWindowWidth } from '@/hooks'
import imageBest2 from '@assets/images/best/best-1.webp'
import imageBest1 from '@assets/images/best/best-2.webp'

export const BestPhotos: React.FC = () => {
  const isMobile = useWindowWidth(375)

  return (
    <S.StyledBestPhotos isMobile={isMobile}>
      <CardPhoto
        maxWidth={'410px'}
        width={'55%'}
        height={'85%'}
        borderRadius="24px"
        sectionValue={'best'}
        viewValue={'positioned'}
        positionOptions={{
          position: 'absolute',
          top: '0',
          right: '0',
          zIndex: 10,
        }}
      >
        <CardImage src={imageBest1} alt="bestImage-1" />
      </CardPhoto>
      <CardPhoto
        maxWidth={'410px'}
        width={'55%'}
        height={'71.5%'}
        borderRadius="24px"
        sectionValue={'best'}
        viewValue={'positioned'}
        positionOptions={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          zIndex: 10,
        }}
      >
        <CardImage src={imageBest2} alt="bestImage-2" />
      </CardPhoto>
    </S.StyledBestPhotos>
  )
}
