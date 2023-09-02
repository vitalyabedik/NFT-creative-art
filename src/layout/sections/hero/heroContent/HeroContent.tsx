import { S } from './HeroContent_Styles'

import { FlexContainer, SectionContent, Span } from '@/components'
import { useWindowWidth } from '@/hooks'
import { LinksGroup } from '@components/linksGroup'

export const HeroContent: React.FC = () => {
  const isTablet = useWindowWidth(960)

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
          <LinksGroup centeredItems={isTablet} />
        </S.MainContent>
      </FlexContainer>
    </S.StyledContent>
  )
}
