import { S } from '../HeaderMenu_Styles'

type PropsType = {
  items: string[]
}

export const Menu: React.FC<PropsType> = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <S.MenuItem key={item}>
            <S.Link href="#">{item}</S.Link>
          </S.MenuItem>
        )
      })}
    </ul>
  )
}
