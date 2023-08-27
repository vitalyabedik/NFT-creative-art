import styled from 'styled-components'

import { Container } from '@/components'
import { SubscribeContent } from '@layout/sections/subscribe/subscribeContent'
import { SubscribePhotos } from '@layout/sections/subscribe/subscribePhotos'

export const Subscribe = () => {
  return (
    <Container>
      <StyledSubscribe>
        <SubscribePhotos />
        <SubscribeContainer>
          <SubscribeContent />
        </SubscribeContainer>
      </StyledSubscribe>
    </Container>
  )
}

const StyledSubscribe = styled.section`
  background-color: #6267b3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SubscribeContainer = styled.section``
