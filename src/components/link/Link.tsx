import { ReactNode } from 'react'

import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

type PropsType = {
  children: ReactNode
  link?: string
}

export const Link: React.FC<PropsType> = ({ children, link = '#' }) => {
  return (
    <StyledLinkContainer>
      <StyledLink href={link}>{children}</StyledLink>
    </StyledLinkContainer>
  )
}

const StyledLinkContainer = styled.div`
  position: relative;
`

const StyledLink = styled.a`
  &:hover {
    color: ${theme.colors.circleFont};

    position: relative;

    &::before {
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`
