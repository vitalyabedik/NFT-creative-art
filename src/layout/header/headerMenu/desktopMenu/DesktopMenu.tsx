import { S } from '../HeaderMenu_Styles'

import { HeaderItemType } from '@layout/header'
import { Menu } from '@layout/header/headerMenu'

type PropsType = {
  items: HeaderItemType[]
}

export const DesktopMenu: React.FC<PropsType> = ({ items }) => {
  return (
    <S.StyledDesktopMenu>
      <Menu items={items} />
    </S.StyledDesktopMenu>
  )
}
