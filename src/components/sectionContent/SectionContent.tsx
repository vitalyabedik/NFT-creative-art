import styled from 'styled-components'

type PropsType = {
  title: JSX.Element
  description: string
  titleLevel: number
}

export const SectionContent = ({ title, description, titleLevel }: PropsType) => {
  return (
    <StyledSectionContent>
      <HeroTitle as={`h${titleLevel}`}>{title}</HeroTitle>
      <HeroDescription>{description}</HeroDescription>
    </StyledSectionContent>
  )
}

const StyledSectionContent = styled.div`
  background-color: gray;
  text-align: left;
`

const HeroTitle = styled.div`
  background-color: gray;
`

const HeroDescription = styled.p`
  background-color: gray;
  padding: 20px 0 40px;
`
