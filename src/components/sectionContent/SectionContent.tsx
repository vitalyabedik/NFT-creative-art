import styled from 'styled-components'

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
  background-color: gray;
  text-align: left;
`

const Title = styled.div<{ centeredItems: boolean }>`
  background-color: gray;

  text-align: ${({ centeredItems }) => (centeredItems ? 'center' : 'left')};
`

const Description = styled.p<{ centeredItems: boolean }>`
  padding: ${({ centeredItems }) => (centeredItems ? '20px 0 32px' : '20px 0 40px')};

  text-align: ${({ centeredItems }) => (centeredItems ? 'center' : 'left')};
`
