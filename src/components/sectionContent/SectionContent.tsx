import styled from 'styled-components'

type PropsType = {
  title: JSX.Element
  description: string
  titleLevel: number
}

export const SectionContent = ({ title, description, titleLevel }: PropsType) => {
  return (
    <StyledSectionContent>
      <Title as={`h${titleLevel}`}>{title}</Title>
      <Description>{description}</Description>
    </StyledSectionContent>
  )
}

const StyledSectionContent = styled.div`
  background-color: gray;
  text-align: left;
`

const Title = styled.div`
  background-color: gray;
`

const Description = styled.p`
  background-color: gray;
  padding: 20px 0 40px;
`
