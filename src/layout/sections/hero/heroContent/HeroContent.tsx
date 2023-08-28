import { S } from './HeroContent_Styles'

import { FlexContainer, SectionContent, Span } from '@/components'
import { LinksGroup } from '@components/linksGroup'
import { Stats } from '@layout/sections/hero/heroContent/stats'
import { HeroType } from '@layout/sections/hero/heroData/HeroData'

type PropsType = {
  hero: HeroType
}

export const HeroContent: React.FC<PropsType> = ({ hero }) => {
  return (
    <S.StyledContent>
      <FlexContainer gap="72px">
        <S.MainContent>
          <SectionContent
            title={
              <div>
                Discover and Collect The Best NFTs <Span>Digital Art.</Span>
              </div>
            }
            description="Get started with the easiest and most secure platform to buy and trade digital ART and
        NFT’s. Start exploring the world of digital art and NFTs today and take control of your
        digital assets with confidence!"
            titleLevel={1}
          />
          <LinksGroup />
        </S.MainContent>
        <Stats hero={hero} />
      </FlexContainer>
    </S.StyledContent>
  )
}
