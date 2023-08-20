import styled from 'styled-components'

import { FlexContainer, SectionContent } from '@/components'
import { Stats } from '@layout/sections/hero/content/stats'

export const Content = () => {
  return (
    <StyledContent>
      <FlexContainer gap="72px">
        <MainContent>
          <SectionContent
            title="Discover and Collect The Best NFTs"
            markedTitle="Digital Art."
            description="Get started with the easiest and most secure platform to buy and trade digital ART and
        NFT’s. Start exploring the world of digital art and NFTs today and take control of your
        digital assets with confidence!"
            titleLevel={1}
          />
        </MainContent>
        <Stats />
      </FlexContainer>
    </StyledContent>
  )
}

const StyledContent = styled.div`
  max-width: 544px;
`

const MainContent = styled.div`
  background-color: lawngreen;
`
