import * as React from 'react'

import { S } from './Subscribe_Styles'

import { Container } from '@/components'
import { SubscribeContent } from '@layout/sections/subscribe/subscribeContent'
import { SubscribePhotos } from '@layout/sections/subscribe/subscribePhotos'

export const Subscribe: React.FC = () => {
  return (
    <Container>
      <S.StyledSubscribe>
        <SubscribePhotos />
        <S.SubscribeContainer>
          <SubscribeContent />
        </S.SubscribeContainer>
      </S.StyledSubscribe>
    </Container>
  )
}
