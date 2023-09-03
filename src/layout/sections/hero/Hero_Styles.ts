import styled, { css } from 'styled-components'

import { theme } from '@assets/styles/Theme'

type PropsType = {
  isScrolled: boolean
}

const StyledHero = styled.section<PropsType>`
  ${({ isScrolled }) =>
    isScrolled &&
    css<PropsType>`
      margin-top: 100px;
    `}
`
const GridContainer = styled.div`
  display: grid;
  column-gap: 171px;
  row-gap: 50px;
  grid-template-columns: 544px 1fr;
  grid-template-rows: 457px 128px;

  @media ${theme.media.extra.heroBigDesktop} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 100px;
  }

  @media ${theme.media.extra.heroDesktop} {
    column-gap: 50px;
  }

  @media ${theme.media.extra.heroTablet} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    justify-items: center;
    row-gap: 48px;
  }
`

const GridItem = styled.div`
  &:first-child {
    grid-area: 1/1/2/2;

    @media ${theme.media.extra.heroTablet} {
      grid-area: 1/1/1/2;
    }
  }

  &:nth-child(2) {
    grid-area: 2/1/3/2;

    @media ${theme.media.extra.heroTablet} {
      grid-area: 3/1/4/1;
    }
  }

  &:last-child {
    grid-area: 1/2/2/3;

    @media ${theme.media.extra.heroTablet} {
      grid-area: 2/1/3/1;
      width: 55%;
    }

    @media ${theme.media.mobile} {
      grid-area: 2/1/3/1;
      width: 343px;
    }

    @media ${theme.media.smallMobile} {
      grid-area: 2/1/3/1;
      width: 343px;
    }
  }
`

export const S = {
  StyledHero,
  GridContainer,
  GridItem,
}
