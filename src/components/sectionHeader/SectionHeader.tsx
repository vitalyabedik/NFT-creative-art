import { Button, FlexContainer, SectionTitle } from '@/components'

type PropsType = {
  title: JSX.Element
  titleWidth: string
  justify?: string
  align?: string
}

export const SectionHeader = ({ title, titleWidth, justify, align }: PropsType) => {
  return (
    <FlexContainer justify={justify} align={align}>
      <SectionTitle titleWidth={titleWidth}>{title}</SectionTitle>
      <Button></Button>
    </FlexContainer>
  )
}
