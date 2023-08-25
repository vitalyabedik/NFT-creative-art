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
  width: 740px;
  height: 559px;
  background-color: lawngreen;
  position: relative;
`

const FirstBestPhoto = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

const SecondaryBestPhoto = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
`
