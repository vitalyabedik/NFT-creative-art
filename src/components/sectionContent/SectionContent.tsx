import styled from 'styled-components'

import { FlexContainer, Link } from '@/components'

type PropsType = {
  title: string
  markedTitle: string
  description: string
  titleLevel: number
}

export const SectionContent = ({ title, markedTitle, description, titleLevel }: PropsType) => {
  return (
    <StyledSectionContent>
      <HeroTitle as={`h${titleLevel}`}>
        {title}
        <span>{markedTitle}</span>
      </HeroTitle>
      <HeroDescription>{description}</HeroDescription>
      <FlexContainer gap="36px">
        <Link />
        <Link />
      </FlexContainer>
    </StyledSectionContent>
  )
}

const StyledSectionContent = styled.div`
  background-color: gray;
`

const HeroTitle = styled.div`
  background-color: gray;
`

const HeroDescription = styled.p`
  background-color: gray;
  padding: 20px 0 40px;
`
