import styled from 'styled-components'

import { FlexContainer, Icon, Logo } from '@/components'

export const FooterContent = () => {
  return (
    <StyledFooterContent>
      <FlexContainer direction="column" gap="24px">
        <FooterMainContent>
          <Logo />
          <FooterContentText>
            Discover NFTs by category, track the latest drop, and and follow the collections you
            love. Enjoy it!
          </FooterContentText>
        </FooterMainContent>
        <FlexContainer gap="12px">
          <Icon iconId={'facebook'} />
          <Icon iconId={'telegram'} />
          <Icon iconId={'twitter'} />
          <Icon iconId={'linkedin'} />
        </FlexContainer>
      </FlexContainer>
    </StyledFooterContent>
  )
}

const StyledFooterContent = styled.div`
  width: 272px;
`

const FooterMainContent = styled.div``

const FooterContentText = styled.p``
