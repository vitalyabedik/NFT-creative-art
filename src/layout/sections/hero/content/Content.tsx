import styled from 'styled-components'

import { FlexContainer, SectionContent } from '@/components'
import { LinksGroup } from '@components/linksGroup'
import { HeroType } from '@layout/sections'
import { Stats } from '@layout/sections/hero/content/stats'

type PropsType = {
  hero: HeroType
}

export const Content = ({ hero }: PropsType) => {
  return (
    <StyledContent>
      <FlexContainer gap="72px">
        <MainContent>
          <SectionContent
            title={
              <div>
                Discover and Collect The Best NFTs <span>Digital Art.</span>
              </div>
            }
            description="Get started with the easiest and most secure platform to buy and trade digital ART and
        NFT’s. Start exploring the world of digital art and NFTs today and take control of your
        digital assets with confidence!"
            titleLevel={1}
          />
          <LinksGroup />
        </MainContent>
        <Stats hero={hero} />
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
