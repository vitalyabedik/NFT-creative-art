import { animateScroll as scroll } from 'react-scroll'

import { Icon } from '@/components'

export const Logo: React.FC = () => {
  const onClickHandler = () => scroll.scrollToTop()

  return (
    <a onClick={onClickHandler}>
      <Icon iconId={'logo'} width={'196'} height={'67'} viewBox={'0 0 196 67'} />
    </a>
  )
}
