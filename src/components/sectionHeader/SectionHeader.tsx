import { Button, FlexContainer, SectionTitle } from '@/components'

type PropsType = {
  title: JSX.Element
  titleWidth: string
  btnText?: string
  justify?: string
  align?: string
}

export const SectionHeader = ({
  title,
  titleWidth,
  btnText = 'See All',
  justify,
  align,
}: PropsType) => {
  return (
    <FlexContainer justify={justify} align={align}>
      <SectionTitle titleWidth={titleWidth}>{title}</SectionTitle>
      <Button bntType="primary">{btnText}</Button>
    </FlexContainer>
  )
}
