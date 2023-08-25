import styled from 'styled-components'

type PropsType = Partial<{
  width: string
  height: string
  borderRadius: string
  backgroundImage: string
  isCard: boolean
}>

export const CardPhoto = styled.div<PropsType>`
  background-color: gray;
  width: ${({ width }) => width || '370px'};
  height: ${({ height }) => height || '340px'};
  border-radius: ${({ borderRadius }) => borderRadius || '16px'};
  ${({ isCard, backgroundImage }) =>
    isCard
      ? `
      border: 1px solid #000;
      background: url(${backgroundImage}), lightgray 0px -26.79px / 100% 146.516% no-repeat;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    `
      : ''}
  background-image: ${({ backgroundImage }) => (backgroundImage ? `url(${backgroundImage})` : '')};
  background-size: cover;
  background-position: top;
}`
