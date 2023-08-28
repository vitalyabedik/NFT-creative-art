import * as React from 'react'

import { S } from './PopularImages_Styles'

import { UserInfo } from '@/components'
import { PopularType } from '@layout/sections/popular/popularData/PopularData'

type PropsType = {
  popularData: PopularType[]
}

export const PopularImages: React.FC<PropsType> = ({ popularData }) => {
  return (
    <S.GridContainer>
      {popularData.map(user => {
        return (
          <S.GridItem key={user.id} image={user.workImage}>
            <UserInfo {...user} />
          </S.GridItem>
        )
      })}
    </S.GridContainer>
  )
}
