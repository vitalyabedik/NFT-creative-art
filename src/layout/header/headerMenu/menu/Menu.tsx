import { S } from '../HeaderMenu_Styles'

import { HeaderItemType } from '@layout/header'

type PropsType = {
  items: HeaderItemType[]
}

export const Menu: React.FC<PropsType> = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <S.MenuItem key={item.title}>
            <S.NavLink activeClass="active" to={item.href} smooth={true} spy={true}>
              {item.title}
            </S.NavLink>
          </S.MenuItem>
        )
      })}
    </ul>
  )
}
