import { S } from './Amazing_Styles'

import { Button, Container, SectionHeader, Span } from '@/components'
import { useWindowWidth } from '@/hooks'
import { AmazingCards } from '@layout/sections/amazing/amazingCards'
import { AmazingData } from '@layout/sections/amazing/amazingData'

export const Amazing: React.FC = () => {
  const isTablet = useWindowWidth(768)

  return (
    <S.StyledAmazing>
      <Container>
        <S.AmazingContainer>
          <SectionHeader
            title={
              <div>
                <Span>Amazing</Span> and Super Unique Art of This <Span>Week</Span>{' '}
              </div>
            }
            titleWidth="506px"
            isVisibleButton={isTablet}
            justify="space-between"
            align="flex-end"
          />
          <AmazingCards amazingData={AmazingData} />
          {isTablet && <Button bntType="primary">{'See all'}</Button>}
        </S.AmazingContainer>
      </Container>
    </S.StyledAmazing>
  )
}
