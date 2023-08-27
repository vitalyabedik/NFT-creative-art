import styled from 'styled-components'

type PropsType = Partial<{
  width: string
  height: string
  borderRadius: string
  background: string
  isCard: boolean
}>

export const CardPhoto = styled.div<PropsType>`
  max-width: ${({ width }) => width || '370px'};
  width: 100%;
  min-height: ${({ height }) => height || '340px'};
  border-radius: ${({ borderRadius }) => borderRadius || '16px'};
  ${({ isCard }) =>
    isCard
      ? `
      border: 1px solid #000;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    `
      : ''}
  background: ${({ background }) => background || ''} ;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}`

// export const CardPhoto = styled.div<PropsType>`
//   width: ${({ width }) => width || '370px'};
//   height: ${({ height }) => height || '340px'};
//   border-radius: ${({ borderRadius }) => borderRadius || '16px'};
//   ${({ isCard }) =>
//     isCard
//         ? `
//       border: 1px solid #000;
//       box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
//     `
//         : ''}
//   background: ${({ background }) => background || ''} ;
//   background-size: cover;
//   background-position: top;
//   background-repeat: no-repeat;
// }`
