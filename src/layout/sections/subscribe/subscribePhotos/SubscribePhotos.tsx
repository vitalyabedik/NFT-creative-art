import styled from 'styled-components'

import { CardPhoto } from '@/components'

export const SubscribePhotos = () => {
  return (
    <StyledBestPhotos>
      <FirstBestPhoto>
        <CardPhoto width="410px" height="376px" borderRadius="20px" />
      </FirstBestPhoto>
      <SecondaryBestPhoto>
        <CardPhoto width="282px" height="348px" borderRadius="16px" />
      </SecondaryBestPhoto>
    </StyledBestPhotos>
  )
}

const StyledBestPhotos = styled.div`
  width: 630px;
  height: 458px;
  background-color: lawngreen;
  position: relative;
`

const FirstBestPhoto = styled.div`
  position: absolute;
  bottom: 33px;
  left: 30px;
  z-index: 10;
  transform: rotate(-11.188deg);
`

const SecondaryBestPhoto = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;
  background-color: coral;
`
