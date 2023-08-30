import styled from 'styled-components'

import iconsSprite from '@assets/images/svg/sprite.svg'
import { transition } from '@assets/styles/Common'
import { theme } from '@assets/styles/Theme'

type PropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon: React.FC<PropsType> = ({ iconId, width, height, viewBox }) => {
  return (
    <StyledIcon>
      <svg
        width={width || '24'}
        height={height || '24'}
        viewBox={viewBox || '0 0 24 24'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use xlinkHref={`${iconsSprite}#${iconId}`}></use>
      </svg>
    </StyledIcon>
  )
}

const StyledIcon = styled.div`
  display: flex;
  ${transition()}

  & svg {
    color: ${theme.colors.mainFont};
  }

  &:hover svg {
    color: ${theme.colors.accent};
  }
`
