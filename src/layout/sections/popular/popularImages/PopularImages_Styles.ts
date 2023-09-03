import styled from 'styled-components'

import { noHover, transition } from '@assets/styles/Common'
import { theme } from '@assets/styles/Theme'

const GridContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 310px);

  @media ${theme.media.extra.popularTablet} {
    grid-template-rows: repeat(4, 310px);
    grid-template-columns: repeat(12, 1fr);
  }

  @media ${theme.media.tablet} {
    margin-top: 0;
  }

  @media ${theme.media.mobile} {
    grid-template-rows: repeat(5, 356px);
  }
`

const GridItem = styled.div<{ image: string }>`
  position: relative;
  background: linear-gradient(2deg, rgba(19, 30, 58, 0.92) 0%, rgba(19, 30, 58, 0) 94.62%),
    url(${props => props.image});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  border-radius: ${theme.borderRadius.main};

  @media ${theme.media.mobile} {
    background-position: center;
  }

  &:first-child {
    grid-area: 1/1/1/4;

    @media ${theme.media.extra.popularDesktop} {
      grid-area: 1/1/1/5;
    }

    @media ${theme.media.extra.popularTablet} {
      grid-area: 1/1/1/7;
    }

    @media ${theme.media.mobile} {
      grid-area: 1/1/1/13;
    }
  }

  &:nth-child(2) {
    grid-area: 1/4/1/9;

    @media ${theme.media.extra.popularDesktop} {
      grid-area: 1/5/1/9;
    }

    @media ${theme.media.extra.popularTablet} {
      grid-area: 1/7/1/13;
    }

    @media ${theme.media.mobile} {
      grid-area: 2/1/3/13;
    }
  }

  &:nth-child(3) {
    grid-area: 2/1/3/5;

    @media ${theme.media.extra.popularTablet} {
      grid-area: 3/1/5/13;
    }

    @media ${theme.media.mobile} {
      grid-area: 4/1/5/13;
    }
  }

  &:nth-child(4) {
    grid-area: 2/5/3/9;

    @media ${theme.media.extra.popularTablet} {
      grid-area: 2/7/3/13;
    }

    @media ${theme.media.mobile} {
      grid-area: 5/1/6/13;
    }
  }

  &:last-child {
    grid-area: 1/9/3/13;

    @media ${theme.media.extra.popularTablet} {
      grid-area: 2/1/3/7;
    }

    @media ${theme.media.mobile} {
      grid-area: 3/1/4/13;
    }
  }

  &:hover {
    scale: 1.05;
    ${transition()}
  }

  &:not(:hover) {
    ${noHover()}
  }
`

export const S = {
  GridContainer,
  GridItem,
}
