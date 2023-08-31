import styled, { css } from 'styled-components'

import { theme } from '@assets/styles/Theme'

export const CardPhoto = styled.div<PropsType>`
  // sizes
  max-width: ${({ maxWidth }) => maxWidth || '370px'};
  max-height: ${({ maxHeight }) => maxHeight || '475px'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '340px'};
  border-radius: ${({ borderRadius }) => borderRadius || '16px'};

  ${({ sectionValue }) =>
    sectionValue === 'best' &&
    css<PropsType>`
      @media ${theme.media.tablet} {
        &:first-child {
          height: 70%;
        }

        &:last-child {
          height: 65%;
        }
      }

      @media ${theme.media.mobile} {
        &:first-child {
          height: 65%;
        }

        &:last-child {
          height: 60%;
        }
      }

      @media ${theme.media.smallMobile} {
        width: 190px;
        &:first-child {
          height: 220px;
        }

        &:last-child {
          height: 190px;
        }
      }
    `}

  ${({ sectionValue }) =>
    sectionValue === 'subscribe' &&
    css<PropsType>`
      @media ${theme.media.smallMobile} {
        &:first-child {
          width: 225px;
          height: 204px;
        }

        &:last-child {
          width: 153px;
          height: 190px;
        }
      }
    `}
  
 
    ${({ isCard }) =>
      isCard
        ? `
      border: 1px solid #000;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    `
        : ''}

    // background
  ${({ viewValue }) =>
    viewValue === 'background' &&
    css<PropsType>`
      background: ${({ background }) => background || ''};
      background-size: cover;
      background-position: top;
      background-repeat: no-repeat;
    `}

  
  // position and viewing
  ${({ viewValue }) =>
    viewValue === 'positioned' &&
    css<PropsType>`
      position: ${({ positionOptions }) => positionOptions?.position};
      top: ${({ positionOptions }) => positionOptions?.top};
      right: ${({ positionOptions }) => positionOptions?.right};
      bottom: ${({ positionOptions }) => positionOptions?.bottom};
      left: ${({ positionOptions }) => positionOptions?.left};
      transform: ${({ positionOptions }) => `rotate(${positionOptions?.rotateAngle}deg)`};
      z-index: ${({ positionOptions }) => positionOptions?.zIndex};
    `}
  }
`

// types
type SectionValueType = 'best' | 'subscribe'
type ViewValueType = 'card' | 'background' | 'positioned'

type PositionOptionsType = Partial<{
  position: string
  top: string
  right: string
  bottom: string
  left: string
  rotateAngle: number
  zIndex: number
}>

type PropsType = Partial<{
  sectionValue: SectionValueType
  width: string
  maxWidth: string
  height: string
  maxHeight: string
  borderRadius: string
  background: string
  isCard: boolean
  viewValue: ViewValueType
  positionOptions: PositionOptionsType
}>
