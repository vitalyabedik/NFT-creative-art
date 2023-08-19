import styled from 'styled-components'

import { FlexContainer, Link } from '@/components'
import { Stats } from '@layout/sections/stats'

export const Content = () => {
  return (
    <StyledContent>
      <FlexContainer gap="72px">
        <MainContent>
          <HeroTitle>
            Discover and Collect The Best NFTs <span>Digital Art.</span>
          </HeroTitle>
          <HeroDescription>
            Get started with the easiest and most secure platform to buy and trade digital ART and
            NFT’s. Start exploring the world of digital art and NFTs today and take control of your
            digital assets with confidence!
          </HeroDescription>
          <FlexContainer gap="36px">
            <Link />
            <Link />
          </FlexContainer>
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

const HeroTitle = styled.h1`
  background-color: gray;
`

const HeroDescription = styled.p`
  background-color: gray;
  padding: 20px 0 40px;
`
