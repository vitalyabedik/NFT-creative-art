import styled from 'styled-components'

import { FlexContainer } from '@/components'

export const Copyright = () => {
  return (
    <FlexContainer justify="space-between">
      <CopyrightText>© Copyright 2023 - Creativeart</CopyrightText>
      <FlexContainer justify="space-between" gap="28px">
        <CopyrightPolicy>Privacy Policy</CopyrightPolicy>
        <CopyrightTermsConditions>Terms & Conditions</CopyrightTermsConditions>
      </FlexContainer>
    </FlexContainer>
  )
}

const CopyrightText = styled.div`
  background-color: gray;
`

const CopyrightPolicy = styled.a`
  background-color: gray;
`

const CopyrightTermsConditions = styled.a`
  background-color: gray;
`
