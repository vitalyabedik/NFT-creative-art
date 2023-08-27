import styled from 'styled-components'

import { UserInfo } from '@/components'
import leoAvatar from '@assets/images/avatars/avatar-leo.webp'
import percyAvatar from '@assets/images/avatars/avatar-percy.webp'
import sqiureAvatar from '@assets/images/avatars/avatar-sqiure.webp'
import waltanAvatar from '@assets/images/avatars/avatar-waltan.webp'
import zackAvatar from '@assets/images/avatars/avatar-zack.webp'

const usersData = [
  {
    id: 1,
    userName: 'Osvaldo Percy',
    photo: percyAvatar,
  },
  {
    id: 2,
    userName: 'Ranson Sqiure',
    photo: sqiureAvatar,
  },
  {
    id: 3,
    userName: 'Sebastian waltan',
    photo: waltanAvatar,
  },
  {
    id: 4,
    userName: 'Abraham Zack',
    photo: zackAvatar,
  },
  {
    id: 5,
    userName: 'Cristio leo',
    photo: leoAvatar,
  },
]

export const PopularImages = () => {
  return (
    <GridContainer>
      {usersData.map(user => {
        return (
          <GridItem key={user.id}>
            <UserInfo {...user} />
          </GridItem>
        )
      })}
    </GridContainer>
  )
}

const GridContainer = styled.div`
  background-color: red;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 310px);
  margin-top: 64px;
`

const GridItem = styled.div`
  background-color: green;
  position: relative;

  &:first-child {
    grid-area: 1/1/1/4;
  }

  &:nth-child(2) {
    grid-area: 1/4/1/9;
  }

  &:nth-child(3) {
    grid-area: 1/9/3/13;
  }

  &:nth-child(4) {
    grid-area: 2/1/3/5;
  }

  &:last-child {
    grid-area: 2/5/3/9;
  }
`
