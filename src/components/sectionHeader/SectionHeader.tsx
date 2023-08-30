import { Button, FlexContainer, SectionTitle } from '@/components'

type PropsType = {
  title: JSX.Element
  titleWidth: string
  isVisibleButton?: boolean
  btnText?: string
  justify?: string
  align?: string
}

export const SectionHeader = ({
  title,
  titleWidth,
  isVisibleButton = true,
  btnText = 'See All',
  justify,
  align,
}: PropsType) => {
  return (
    <FlexContainer justify={justify} align={align}>
      <SectionTitle titleWidth={titleWidth}>{title}</SectionTitle>
      {!isVisibleButton && <Button bntType="primary">{btnText}</Button>}
    </FlexContainer>
  )
}
