import * as React from 'react'

import { S } from './SubscribePhotos_Styles'

import { CardPhoto } from '@/components'
import { useWindowWidth } from '@/hooks'
import subscribeImage1 from '@assets/images/subscribe/subscribe-1.webp'
import subscribeImage2 from '@assets/images/subscribe/subscribe-2.webp'
import { CardImage } from '@components/cardImage'

export const SubscribePhotos: React.FC = () => {
  const isMobile = useWindowWidth(375)

  return (
    <S.StyledSubscribePhotos>
      <CardPhoto
        maxWidth="410px"
        width="65%"
        height="82%"
        borderRadius="20px"
        viewValue={'positioned'}
        positionOptions={{
          position: 'absolute',
          bottom: isMobile ? '16px' : '30px',
          left: isMobile ? '14px' : '30px',
          zIndex: 10,
          rotateAngle: -11.188,
        }}
      >
        <CardImage src={subscribeImage1} alt="subscribeImage-1" />
      </CardPhoto>
      <CardPhoto
        maxWidth="282px"
        width="45%"
        height="76%"
        borderRadius="16px"
        viewValue={'positioned'}
        positionOptions={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          zIndex: 10,
        }}
      >
        <CardImage src={subscribeImage2} alt="subscribeImage-2" />
      </CardPhoto>
    </S.StyledSubscribePhotos>
  )
}
