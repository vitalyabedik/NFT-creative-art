import { ReactNode } from 'react'

import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

type PropsType = {
  children: ReactNode
  link?: string
}

export const Link = ({ children, link = '#' }: PropsType) => {
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

    &::before {
      content: '';
      display: inline-block;
      height: 1px;
      width: 100%;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: 0;
    }
  }
`
