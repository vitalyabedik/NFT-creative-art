import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'
import { FooterMenuType } from '@layout/footer/footerData'
import { FooterMenuItem } from '@layout/footer/footerMenu/footerMenuItem'

type PropsType = {
  menu: FooterMenuType[]
}

export const FooterMenu = ({ menu }: PropsType) => {
  return (
    <FooterMenuWrapper>
      {menu.map(menuEl => {
        return <FooterMenuItem key={menuEl.id} title={menuEl.title} items={menuEl.items} />
      })}
    </FooterMenuWrapper>
  )
}

const FooterMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 94px;

  @media ${theme.media.extra.footerDesktop} {
    display: flex;
    gap: 48px;
  }

  @media ${theme.media.extra.footerTablet} {
    flex-wrap: wrap;
    gap: 24px;
  }

  @media ${theme.media.mobile} {
    max-width: 106px;
  }
`
