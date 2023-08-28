import styled from 'styled-components'

import { Container, FlexContainer, SectionHeader, Span } from '@/components'
import { AmazingCards } from '@layout/sections/amazing/amazingCards'
import { AmazingData } from '@layout/sections/amazing/amazingData'

export const Amazing: React.FC = () => {
  return (
    <StyledAmazing>
      <Container>
        <FlexContainer direction="column" gap="64px">
          <SectionHeader
            title={
              <div>
                <Span>Amazing</Span> and Super Unique Art of This <Span>Week</Span>{' '}
              </div>
            }
            titleWidth="506px"
            justify="space-between"
            align="flex-end"
          />
          <AmazingCards amazingData={AmazingData} />
        </FlexContainer>
      </Container>
    </StyledAmazing>
  )
}

const StyledAmazing = styled.section``
