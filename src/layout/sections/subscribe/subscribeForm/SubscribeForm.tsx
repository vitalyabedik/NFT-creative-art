import { S } from './SubscribeForm_Styles'

import { Button } from '@/components'

export const SubscribeForm: React.FC = () => {
  return (
    <S.StyledForm>
      <S.TextInput placeholder="Enter text" />
      <S.ButtonContainer>
        <Button bntType="primary" type="submit">
          Place A Bid
        </Button>
      </S.ButtonContainer>
    </S.StyledForm>
  )
}
