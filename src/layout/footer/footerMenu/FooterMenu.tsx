import styled from 'styled-components'

import { FlexContainer } from '@/components'
import { FooterMenuType } from '@layout/footer/footerData'
import { FooterMenuItem } from '@layout/footer/footerMenu/footerMenuItem'

type PropsType = {
  menu: FooterMenuType[]
}

export const FooterMenu = ({ menu }: PropsType) => {
  return (
    <StyledFooterMenu>
      <FlexContainer gap="94px">
        {menu.map(menuEl => {
          return <FooterMenuItem key={menuEl.id} title={menuEl.title} items={menuEl.items} />
        })}
      </FlexContainer>
    </StyledFooterMenu>
  )
}

const StyledFooterMenu = styled.div`
  background-color: coral;
`
