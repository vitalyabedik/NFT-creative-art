import styled from 'styled-components'

import { Button, FlexContainer } from '@/components'

type PropsType = {
  title: string
}

export const SectionHeader = ({ title }: PropsType) => {
  return (
    <FlexContainer justify="space-between" align="flex-end">
      <SectionHeaderTitle>{title}</SectionHeaderTitle>
      <Button></Button>
    </FlexContainer>
  )
}

const SectionHeaderTitle = styled.h2`
  background-color: gray;
`
