import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

const StyledForm = styled.form`
  position: relative;
`

const TextInput = styled.input.attrs({ type: 'text' })`
  width: 100%;
  height: 44px;
  padding: 16px 24px;

  background-color: ${theme.colors.secondaryBg};
  border-radius: 8px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${theme.colors.mainFont};
  }
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

export const S = {
  StyledForm,
  TextInput,
  ButtonContainer,
}
