import * as React from 'react'

import styled from 'styled-components'

import { FlexContainer, SectionContent, Span } from '@/components'
import { LinksGroup } from '@components/linksGroup'

type PropsType = {
  centeredItems?: boolean
}

export const BestContent: React.FC<PropsType> = ({ centeredItems }) => {
  return (
    <StyledBestContent>
      <FlexContainer>
        <SectionContent
          title={
            <div>
              Create And Sell Your <Span>Best NFTs</Span>
            </div>
          }
          description="Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!"
          titleLevel={2}
          centeredItems={centeredItems}
        />
        <LinksGroup centeredItems={centeredItems} />
      </FlexContainer>
    </StyledBestContent>
  )
}

const StyledBestContent = styled.div`
  max-width: 426px;
`
