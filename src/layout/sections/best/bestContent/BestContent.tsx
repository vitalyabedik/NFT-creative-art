import styled from 'styled-components'

import { FlexContainer, SectionContent } from '@/components'

export const BestContent = () => {
  return (
    <StyledBestContent>
      <FlexContainer gap="72px">
        <MainContent>
          <SectionContent
            title="Create And Sell Your "
            markedTitle="Best NFTs"
            description="Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!"
            titleLevel={2}
          />
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
