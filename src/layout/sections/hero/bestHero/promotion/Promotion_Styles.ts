import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

const StyledPromotion = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 20px;
  max-width: 264px;
  width: 100%;

  border-radius: 16px;
  border-top: 1px solid ${theme.colors.accent};
  background-color: ${theme.colors.secondaryBg};
  box-shadow: 0px 9px 50px 0px rgba(23, 36, 65, 0.04);

  @media ${theme.media.tablet} {
    width: 224px;
    height: 137px;
    padding: 12px;
  }
`

const PromotionInfo = styled.div`
  width: 100%;
`

const PromotionButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`

export const S = {
  StyledPromotion,
  PromotionInfo,
  PromotionButtonContainer,
}
