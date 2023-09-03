import { Fade } from 'react-awesome-reveal'

import { S } from '../HeaderMenu_Styles'

import { HeaderItemType } from '@layout/header'
import { Menu } from '@layout/header/headerMenu'

type PropsType = {
  items: HeaderItemType[]
}

export const DesktopMenu: React.FC<PropsType> = ({ items }) => {
  return (
    <Fade delay={400} triggerOnce={true}>
      <S.StyledDesktopMenu>
        <Menu items={items} />
      </S.StyledDesktopMenu>
    </Fade>
  )
}
