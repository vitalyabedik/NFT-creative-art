import styled from 'styled-components'

const StyledSubscribePhotos = styled.div`
  max-width: 630px;
  width: 100%;
  min-height: 458px;
  background-color: lawngreen;
  position: relative;
`

const FirstSubscribePhoto = styled.div`
  position: absolute;
  bottom: 33px;
  left: 30px;
  z-index: 10;
  transform: rotate(-11.188deg);

  max-width: 410px;
  width: 100%;
  max-height: 376px;
`

const SecondarySubscribePhoto = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;
  background-color: coral;

  max-width: 282px;
  width: 100%;
  max-height: 348px;
`

export const S = {
  StyledSubscribePhotos,
  FirstSubscribePhoto,
  SecondarySubscribePhoto,
}
