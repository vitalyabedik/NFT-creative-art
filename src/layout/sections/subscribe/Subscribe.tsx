import styled from 'styled-components'

import { SubscribePhotos } from '@layout/sections/subscribe/subscribePhotos'

export const Subscribe = () => {
  return (
    <StyledSubscribe className="container">
      <SubscribePhotos />
    </StyledSubscribe>
  )
}

const StyledSubscribe = styled.section`
  background-color: #6267b3;
  padding: 92px 0;
`
