import styled from 'styled-components'

import { FlexContainer, SectionContent } from '@/components'
import { LinksGroup } from '@components/linksGroup'

export const BestContent = () => {
  return (
    <StyledBestContent>
      <FlexContainer gap="72px">
        <MainContent>
          <SectionContent
            title={
              <div>
                Create And Sell Your <span>Best NFTs</span>
              </div>
            }
            description="Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!"
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
