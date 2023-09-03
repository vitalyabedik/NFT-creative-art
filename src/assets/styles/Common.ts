import { theme } from '@assets/styles/Theme'

type FontPropsType = Partial<{
  family: string
  weight: number
  color: string
  lineHeight: number
  Fmax: number
  Fmin: number
}>

export const font = ({ family, weight, color, lineHeight, Fmax, Fmin }: FontPropsType) => `
    font-family: ${family || 'Inter'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.mainFont};
    line-height: ${lineHeight || 1.6};
    // а был
    font-size: clamp(${Fmin}px, calc( (100vw - 375px)/(1512 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px)
`

export const transition = () => `
    transition: all .2s ease-in-out;
`

export const noHover = () => `
    transition: all .3s ease-in-out;
    transition-delay: 0.1s;
    transform: scale(1);
`
