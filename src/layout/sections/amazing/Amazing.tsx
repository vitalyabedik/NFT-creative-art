import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'

import { Button, Container, FlexContainer, SectionHeader, Span } from '@/components'
import { useWindowWidth } from '@/hooks'
import { AmazingCards } from '@layout/sections/amazing/amazingCards'
import { AmazingData } from '@layout/sections/amazing/amazingData'

export const Amazing: React.FC = () => {
  const isTablet = useWindowWidth(768)

  return (
    <Fade cascade={true} damping={1} delay={400}>
      <StyledAmazing id={'amazing'}>
        <Container>
          <FlexContainer direction="column" gap={isTablet ? '32px' : '64px'}>
            <SectionHeader
              title={
                <div>
                  <Span>Amazing</Span> and Super Unique Art of This <Span>Week</Span>{' '}
                </div>
              }
              titleWidth="506px"
              isVisibleButton={isTablet}
              justify={isTablet ? 'center' : 'space-between'}
              align="flex-end"
            />
            <AmazingCards amazingData={AmazingData} />
            {isTablet && (
              <FlexContainer justify="center">
                <Button bntType="primary">{'See all'}</Button>
              </FlexContainer>
            )}
          </FlexContainer>
        </Container>
      </StyledAmazing>
    </Fade>
  )
}

const StyledAmazing = styled.section``
