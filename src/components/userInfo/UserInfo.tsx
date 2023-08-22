import styled from 'styled-components'

import { Avatar, FlexContainer } from '@/components'

type PropsType = {
  userName: string
  photo?: string
}

export const UserInfo = ({ userName, photo }: PropsType) => {
  return (
    <StyledUserInfo>
      <FlexContainer justify="space-between" gap="12px">
        <Avatar photo={photo} />
        <FlexContainer direction="column" justify="space-between">
          <span>Owner</span>
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

const UserName = styled.h5``
