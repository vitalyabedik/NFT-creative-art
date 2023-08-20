import styled from 'styled-components'

import { FlexContainer } from '@/components'
import { SubscribeContent } from '@layout/sections/subscribe/subscribeContent'
import { SubscribePhotos } from '@layout/sections/subscribe/subscribePhotos'

export const Subscribe = () => {
  return (
    <StyledSubscribe className="container">
      <FlexContainer justify="space-between" align="center">
        <SubscribePhotos />
        <SubscribeContent />
      </FlexContainer>
    </StyledSubscribe>
  )
}

const StyledSubscribe = styled.section`
  background-color: #6267b3;
  padding: 92px 0;
`
