import styled from 'styled-components'

import { theme } from '@assets/styles/Theme'

const StyledForm = styled.form`
  position: relative;
  width: 100%;
`

const TextInput = styled.input.attrs({ type: 'text' })`
  width: 100%;
  height: 60px;
  padding: 0 24px;

  background-color: ${theme.colors.secondaryBg};
  border-radius: 8px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${theme.colors.mainFont};
  }
`

const ButtonContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 4px;

  @media ${'screen and (max-width: 576px)'} {
    position: static;
    margin-top: 20px;
  }
`

export const S = {
  StyledForm,
  TextInput,
  ButtonContainer,
}
