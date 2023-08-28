import * as React from 'react'

import { S } from './BestPhotos_Styles'

import { CardPhoto } from '@/components'
import imageBest2 from '@assets/images/best/best-1.webp'
import imageBest1 from '@assets/images/best/best-2.webp'

export const BestPhotos: React.FC = () => {
  return (
    <S.StyledBestPhotos>
      <S.FirstBestPhoto>
        <CardPhoto
          width="410px"
          height="475px"
          borderRadius="24px"
          background={`url(${imageBest1}), lightgray 50%`}
        />
      </S.FirstBestPhoto>
      <S.SecondaryBestPhoto>
        <CardPhoto
          width="410px"
          height="400px"
          borderRadius="24px"
          background={`url(${imageBest2}), lightgray 0px -16.951px / 100% 125.44%`}
        />
      </S.SecondaryBestPhoto>
    </S.StyledBestPhotos>
  )
}
