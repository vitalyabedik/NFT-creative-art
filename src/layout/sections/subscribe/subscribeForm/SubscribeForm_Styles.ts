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
  color: ${theme.colors.mainFont};
  background-color: ${theme.colors.secondaryBg};
  border-radius: ${theme.borderRadius.button};

  &:focus {
    outline: none;
  }

  &:focus-visible {
    border-color: ${theme.colors.accent};
  }

  &::placeholder {
    color: ${theme.colors.mainFont};
  }
`

const ButtonContainer = styled.div`
  position: absolute;
  top: 6px;
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
