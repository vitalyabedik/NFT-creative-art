import styled from 'styled-components'

import { Container, FlexContainer } from '@/components'
import { SubscribeContent } from '@layout/sections/subscribe/subscribeContent'
import { SubscribePhotos } from '@layout/sections/subscribe/subscribePhotos'

export const Subscribe = () => {
  return (
    <StyledSubscribe>
      <Container>
        <FlexContainer justify="space-between" align="center">
          <SubscribePhotos />
          <SubscribeContainer>
            <SubscribeContent />
          </SubscribeContainer>
        </FlexContainer>
      </Container>
    </StyledSubscribe>
  )
}

const StyledSubscribe = styled.section`
  background-color: #6267b3;
`

const SubscribeContainer = styled.section`
  max-width: 520px;
  width: 100%;
`
