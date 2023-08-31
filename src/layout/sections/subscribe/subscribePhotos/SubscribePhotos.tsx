import * as React from 'react'

import { S } from './SubscribePhotos_Styles'

import { CardPhoto } from '@/components'
import subscribeImage1 from '@assets/images/subscribe/subscribe-1.webp'
import subscribeImage2 from '@assets/images/subscribe/subscribe-2.webp'

export const SubscribePhotos: React.FC = () => {
  return (
    <S.StyledSubscribePhotos>
      <S.FirstSubscribePhoto>
        <CardPhoto
          width="410px"
          height="376px"
          borderRadius="20px"
          viewValue={'background'}
          background={`url(${subscribeImage1}), lightgray -5.732px -51.573px / 100% 136.303%`}
        />
      </S.FirstSubscribePhoto>
      <S.SecondarySubscribePhoto>
        <CardPhoto
          width="282px"
          height="348px"
          borderRadius="16px"
          viewValue={'background'}
          background={`url(${subscribeImage2}), lightgray 50%`}
        />
      </S.SecondarySubscribePhoto>
    </S.StyledSubscribePhotos>
  )
}
