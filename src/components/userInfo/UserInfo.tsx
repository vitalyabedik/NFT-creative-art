import styled from 'styled-components'

import { Avatar, FlexContainer } from '@/components'
import { font } from '@assets/styles/Common'

type PropsType = {
  id: number
  userName: string
  avatar: string
  workImage: string
}

export const UserInfo = ({ userName, avatar }: PropsType) => {
  return (
    <StyledUserInfo>
      <FlexContainer justify="space-between" gap="12px">
        <Avatar photo={avatar} />
        <FlexContainer direction="column" justify="space-between">
          <UserSpan>Owner</UserSpan>
          <UserName>{userName}</UserName>
        </FlexContainer>
      </FlexContainer>
    </StyledUserInfo>
  )
}

const StyledUserInfo = styled.div`
  position: absolute;
  bottom: 0;
  padding: 24px;
`

const UserSpan = styled.span`
  ${font({ Fmin: 14, Fmax: 14 })}
`

const UserName = styled.h5``
