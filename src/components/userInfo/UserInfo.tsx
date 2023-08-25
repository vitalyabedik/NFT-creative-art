import styled from 'styled-components'

import { Avatar, FlexContainer } from '@/components'
import { font } from '@assets/styles/Common'

type PropsType = {
  userName: string
  photo: string
}

export const UserInfo = ({ userName, photo }: PropsType) => {
  return (
    <StyledUserInfo>
      <FlexContainer justify="space-between" gap="12px">
        <Avatar photo={photo} />
        <FlexContainer direction="column" justify="space-between">
          <UserSpan>Owner</UserSpan>
          <UserName>{userName}</UserName>
        </FlexContainer>
      </FlexContainer>
    </StyledUserInfo>
  )
}

const StyledUserInfo = styled.div`
  background-color: aqua;
  position: absolute;
  bottom: 0;
  padding: 24px;
`

const UserSpan = styled.span`
  ${font({ Fmin: 14, Fmax: 14 })}
`

const UserName = styled.h5``
