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

export const Icon = (props: PropsType) => {
  const { iconId, width, height, viewBox } = props

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
  ${transition()}
  cursor: pointer;

  & svg {
    color: ${theme.colors.accent};
  }

  &:hover svg {
    fill: currentColor;
    stroke: currentColor;
    background-color: ${theme.colors.accent};
  }
`
