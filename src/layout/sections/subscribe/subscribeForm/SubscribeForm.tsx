import styled from 'styled-components'

export const SubscribeForm = () => {
  return (
    <StyledForm>
      <TextInput placeholder="Enter text" />
      <SubmitButton value="Submit" />
    </StyledForm>
  )
}

const StyledForm = styled.form`
  position: relative;
`

const TextInput = styled.input.attrs({ type: 'text' })`
  width: 100%;
`

const SubmitButton = styled.input.attrs({ type: 'submit' })`
  position: absolute;
  top: 0;
  right: 0;
`
