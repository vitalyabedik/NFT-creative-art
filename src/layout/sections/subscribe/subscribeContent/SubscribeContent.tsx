import styled from 'styled-components'

import { FlexContainer, SectionContent } from '@/components'
import { LinksGroup } from '@components/linksGroup'

export const SubscribeContent = () => {
  return (
    <StyledBestContent>
      <FlexContainer gap="72px">
        <MainContent>
          <SectionContent
            title={
              <div>
                Subscribe And <span>get our Updates</span> Every Week
              </div>
            }
            description="We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly"
            titleLevel={2}
          />
          <LinksGroup />
        </MainContent>
      </FlexContainer>
    </StyledBestContent>
  )
}

const StyledBestContent = styled.div`
  max-width: 426px;
`

const MainContent = styled.div`
  background-color: lawngreen;
`
