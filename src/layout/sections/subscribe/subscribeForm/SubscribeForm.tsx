import styled from 'styled-components'

import { Button } from '@/components'

export const SubscribeForm = () => {
  return (
    <StyledForm>
      <TextInput placeholder="Enter text" />
      <ButtonContainer>
        <Button bntType="primary" type="submit">
          Place A Bid
        </Button>
      </ButtonContainer>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  position: relative;
`

const TextInput = styled.input.attrs({ type: 'text' })`
  width: 100%;
  height: 44px;
`

// const ButtonContainer = styled.input.attrs({ type: 'submit' })`
//   position: absolute;
//   top: 0;
//   right: 0;
// `

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`
