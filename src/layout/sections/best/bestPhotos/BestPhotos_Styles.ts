import styled from 'styled-components'

const StyledBestPhotos = styled.div`
  max-width: 740px;
  width: 100%;
  min-height: 559px;
  background-color: red;
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

export const S = {
  StyledBestPhotos,
  FirstBestPhoto,
  SecondaryBestPhoto,
}
