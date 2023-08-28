import { S } from './Copyright_Styles'

import { Link } from '@/components'

export const Copyright: React.FC = () => {
  return (
    <S.CopyrightFlexContainer>
      <Link link="#">© Copyright 2023 - Creativeart</Link>
      <S.CopyrightFlexContainer>
        <Link link="#">Privacy Policy</Link>
        <Link link="#">Terms & Conditions</Link>
      </S.CopyrightFlexContainer>
    </S.CopyrightFlexContainer>
  )
}
