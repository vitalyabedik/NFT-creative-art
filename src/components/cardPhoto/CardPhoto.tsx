import styled, { css } from 'styled-components'

import { noHover, transition } from '@assets/styles/Common'
import { theme } from '@assets/styles/Theme'

export const CardPhoto = styled.div<PropsType>`
  // sizes
  max-width: ${({ maxWidth }) => maxWidth || '370px'};
  max-height: ${({ maxHeight }) => maxHeight || '475px'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '340px'};
  border-radius: ${({ borderRadius }) => borderRadius || `${theme.borderRadius.main}`};

  ${({ sectionValue }) =>
    sectionValue === 'hero' &&
    css<PropsType>`
      @media ${theme.media.extra.heroDesktop} {
        height: 85%;
        width: 350px;
      }

      @media ${theme.media.tablet} {
        height: 85%;
        width: 294px;
      }

      @media ${theme.media.smallMobile} {
        height: 344px;
      }

      &:hover {
        scale: 1.05;
        ${transition()}
      }

      &:not(:hover) {
        ${noHover()}
      }
    `}

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

      &:hover {
        ${transition()}
        scale: 1.02;
        z-index: 20;
      }

      &:not(:hover) {
        ${noHover()}
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
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: ${({ positionOptions }) =>
          positionOptions?.rotateAngle
            ? `rotate(${positionOptions?.rotateAngle}deg) scale(1.05)`
            : 'scale(1.05)'};
        z-index: 20;
      }

      &:not(:hover) {
        transform: ${({ positionOptions }) =>
          positionOptions?.rotateAngle
            ? `rotate(${positionOptions?.rotateAngle}deg) scale(1)`
            : 'scale(1)'};
        transition: transform 0.3s ease-in-out;
      }
    `}
`

// types
type SectionValueType = 'hero' | 'best' | 'subscribe'
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
