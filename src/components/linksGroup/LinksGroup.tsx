import { Button, FlexContainer } from '@/components'

export const LinksGroup = () => {
  return (
    <FlexContainer gap="36px" align="center">
      <Button bntType="primary">Explore Now</Button>
      <Button bntType="link" as={'a'} href="#">
        Learn More
      </Button>
    </FlexContainer>
  )
}
