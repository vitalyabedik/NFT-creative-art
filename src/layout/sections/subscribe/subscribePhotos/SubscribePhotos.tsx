import styled from 'styled-components'

import { CardPhoto } from '@/components'
import subscribeImage1 from '@assets/images/subscribe/subscribe-1.webp'
import subscribeImage2 from '@assets/images/subscribe/subscribe-2.webp'

export const SubscribePhotos = () => {
  return (
    <StyledBestPhotos>
      <FirstBestPhoto>
        <CardPhoto
          width="410px"
          height="376px"
          borderRadius="20px"
          background={`url(${subscribeImage1}), lightgray -5.732px -51.573px / 100% 136.303%`}
        />
      </FirstBestPhoto>
      <SecondaryBestPhoto>
        <CardPhoto
          width="282px"
          height="348px"
          borderRadius="16px"
          background={`url(${subscribeImage2}), lightgray 50%`}
        />
      </SecondaryBestPhoto>
    </StyledBestPhotos>
  )
}

const StyledBestPhotos = styled.div`
  max-width: 630px;
  width: 100%;
  min-height: 458px;
  background-color: lawngreen;
  position: relative;
`

const FirstBestPhoto = styled.div`
  position: absolute;
  bottom: 33px;
  left: 30px;
  z-index: 10;
  transform: rotate(-11.188deg);

  max-width: 410px;
  width: 100%;
  max-height: 376px;
`

const SecondaryBestPhoto = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;
  background-color: coral;

  max-width: 282px;
  width: 100%;
  max-height: 348px;
`
