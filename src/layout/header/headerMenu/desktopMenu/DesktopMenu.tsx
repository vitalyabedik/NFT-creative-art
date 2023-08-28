import { S } from '../HeaderMenu_Styles'

import { Menu } from '@layout/header/headerMenu'

type PropsType = {
  items: string[]
}

export const DesktopMenu: React.FC<PropsType> = ({ items }) => {
  return (
    <S.StyledDesktopMenu>
      <Menu items={items} />
    </S.StyledDesktopMenu>
  )
}
