import styled from 'styled-components'

import { CardPhoto } from '@/components'
import imageBest2 from '@assets/images/best/best-1.webp'
import imageBest1 from '@assets/images/best/best-2.webp'

export const BestPhotos = () => {
  return (
    <StyledBestPhotos>
      <FirstBestPhoto>
        <CardPhoto
          width="410px"
          height="475px"
          borderRadius="24px"
          background={`url(${imageBest1}), lightgray 50%`}
        />
      </FirstBestPhoto>
      <SecondaryBestPhoto>
        <CardPhoto
          width="410px"
          height="400px"
          borderRadius="24px"
          background={`url(${imageBest2}), lightgray 0px -16.951px / 100% 125.44%`}
        />
      </SecondaryBestPhoto>
    </StyledBestPhotos>
  )
}

const StyledBestPhotos = styled.div`
  max-width: 740px;
  width: 100%;
  min-height: 559px;
  background-color: lawngreen;
  position: relative;
`

const FirstBestPhoto = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 410px;
  width: 100%;
  max-height: 475px;
`

const SecondaryBestPhoto = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 10;
  max-width: 410px;
  width: 100%;
  max-height: 400px;
`
