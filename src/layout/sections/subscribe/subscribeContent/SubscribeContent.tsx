import styled from 'styled-components'

import { FlexContainer, SectionContent, Span } from '@/components'
import { SubscribeForm } from '@layout/sections/subscribe/subscribeForm'

export const SubscribeContent = () => {
  return (
    <StyledBestContent>
      <FlexContainer gap="72px">
        <MainContent>
          <SectionContent
            title={
              <div>
                Subscribe And <Span>get our Updates</Span> Every Week
              </div>
            }
            description="We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly"
            titleLevel={2}
          />
          <SubscribeForm />
        </MainContent>
      </FlexContainer>
    </StyledBestContent>
  )
}

const StyledBestContent = styled.div`
  max-width: 520px;
`

const MainContent = styled.div``
