import { Icon } from '@components/Icon'

export function App() {
  return (
    <div style={{ background: 'red' }}>
      <Icon iconId={'logo'} width={'196'} height={'67'} viewBox={'0 0 196 67'} />
      <Icon iconId={'star'} width={'25'} height={'35'} viewBox={'0 0 35 35'} />
      <Icon iconId={'ethereum'} />
      <Icon iconId={'clock'} />
      <Icon iconId={'facebook'} />
      <Icon iconId={'linkedin'} />
    </div>
  )
}
