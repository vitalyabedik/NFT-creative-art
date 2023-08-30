import styled from 'styled-components'

import { FlexContainer, SectionContent, Span } from '@/components'
import { SubscribeForm } from '@layout/sections/subscribe/subscribeForm'

type PropsType = {
  centeredItems?: boolean
}

export const SubscribeContent: React.FC<PropsType> = ({ centeredItems }) => {
  return (
    <StyledBestContent>
      <FlexContainer gap={centeredItems ? '0' : '72px'}>
        <SectionContent
          title={
            <div>
              Subscribe And <Span>get our Updates</Span> Every Week
            </div>
          }
          description="We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly"
          titleLevel={2}
          centeredItems={centeredItems}
        />
        <SubscribeForm />
      </FlexContainer>
    </StyledBestContent>
  )
}

const StyledBestContent = styled.div`
  max-width: 520px;
`
