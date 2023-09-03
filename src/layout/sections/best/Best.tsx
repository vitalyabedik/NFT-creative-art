import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'

import { Container, FlexContainer } from '@/components'
import { useWindowWidth } from '@/hooks'
import { BestContent } from '@layout/sections/best/bestContent'
import { BestPhotos } from '@layout/sections/best/bestPhotos'

export const Best: React.FC = () => {
  const isDesktop = useWindowWidth(1240)

  return (
    <Fade delay={400} triggerOnce={true}>
      <StyledBest id={'best'}>
        <Container>
          <FlexContainer
            direction={isDesktop ? 'column' : 'row'}
            justify={'space-between'}
            gap={isDesktop ? '48px' : '30px'}
            align="center"
          >
            <BestContent centeredItems={isDesktop} />
            <BestPhotos />
          </FlexContainer>
        </Container>
      </StyledBest>
    </Fade>
  )
}

const StyledBest = styled.section``
