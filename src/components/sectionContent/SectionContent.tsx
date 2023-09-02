import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

type PropsType = {
  title: JSX.Element
  description: string
  titleLevel: number
  centeredItems?: boolean
}

export const SectionContent: React.FC<PropsType> = ({
  title,
  description,
  titleLevel,
  centeredItems = false,
}) => {
  return (
    <StyledSectionContent>
      <Title centeredItems={centeredItems} as={`h${titleLevel}`}>
        {title}
      </Title>
      <Description centeredItems={centeredItems}>{description}</Description>
    </StyledSectionContent>
  )
}

const StyledSectionContent = styled.div`
  text-align: left;
`

const Title = styled.div<{ centeredItems: boolean }>`
  text-align: ${({ centeredItems }) => (centeredItems ? 'center' : 'left')};

  @media ${theme.media.extra.heroTablet} {
    text-align: center;
  }
`

const Description = styled.p<{ centeredItems: boolean }>`
  padding: ${({ centeredItems }) => (centeredItems ? '20px 0 32px' : '20px 0 40px')};

  text-align: ${({ centeredItems }) => (centeredItems ? 'center' : 'left')};

  @media ${theme.media.extra.heroTablet} {
    text-align: center;
  }
`
