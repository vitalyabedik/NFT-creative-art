import styled from 'styled-components'

import { FlexContainer } from '@/components'
import { FooterMenuItem } from '@layout/footer/footerMenu/footerMenuItem'

export const FooterMenu = () => {
  return (
    <StyledFooterMenu>
      <FlexContainer gap="94px">
        <FooterMenuItem
          title="Explore"
          items={['Art Sign In', 'Collectibles', 'Domain Name', 'Utility']}
        />
        <FooterMenuItem title="Statistic" items={['Ranking', 'Collectibles', 'Activity']} />
        <FooterMenuItem title="Company" items={['About Us', 'Career', 'Support', 'Partners']} />
        <FooterMenuItem title="Resources" items={['Help Center', 'Platform Status', 'Blog']} />
      </FlexContainer>
    </StyledFooterMenu>
  )
}

const StyledFooterMenu = styled.div`
  background-color: coral;
`
