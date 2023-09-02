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
    // font-size: calc((100vw - 375px) / (1512 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);
    font-size: clamp(${Fmin}px, calc( (100vw - 375px)/(1512 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px)
`

export const transition = () => `
    transition: all 0.3s ease-out;
`
