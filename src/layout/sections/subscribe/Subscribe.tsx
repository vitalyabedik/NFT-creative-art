import * as React from 'react'

import styled from 'styled-components'

import { Container, FlexContainer } from '@/components'
import { useWindowWidth } from '@/hooks'
import { SubscribeContent } from '@layout/sections/subscribe/subscribeContent'
import { SubscribePhotos } from '@layout/sections/subscribe/subscribePhotos'

export const Subscribe: React.FC = () => {
  const isDesktop = useWindowWidth(1240)

  return (
    <Container>
      <StyledSubscribe>
        <FlexContainer
          direction={isDesktop ? 'column-reverse' : 'row'}
          justify={'space-between'}
          gap={isDesktop ? '48px' : '30px'}
          align="center"
        >
          <SubscribePhotos />
          <SubscribeContent centeredItems={isDesktop} />
        </FlexContainer>
      </StyledSubscribe>
    </Container>
  )
}

const StyledSubscribe = styled.section``
