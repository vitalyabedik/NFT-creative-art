import styled from 'styled-components'

import { CardPhoto } from '@/components'

export const BestPhotos = () => {
  return (
    <StyledBestPhotos>
      <FirstBestPhoto>
        <CardPhoto width="410px" height="475px" borderRadius="24px" />
      </FirstBestPhoto>
      <SecondaryBestPhoto>
        <CardPhoto width="410px" height="400px" borderRadius="24px" />
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
  background-color: coral;
`
