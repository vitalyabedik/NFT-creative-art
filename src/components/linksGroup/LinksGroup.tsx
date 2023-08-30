import * as React from 'react'

import { Button, FlexContainer } from '@/components'

type PropsType = {
  centeredItems?: boolean
}

export const LinksGroup: React.FC<PropsType> = ({ centeredItems = false }) => {
  return (
    <FlexContainer
      gap="36px"
      justify={centeredItems ? 'center' : 'flex-start'}
      align="center"
      fullWidth={centeredItems}
    >
      <Button bntType="primary">Explore Now</Button>
      <Button bntType="link" as={'a'} href="#">
        Learn More
      </Button>
    </FlexContainer>
  )
}
