import styled from 'styled-components'

import { UserInfo } from '@/components'

export const PopularImages = () => {
  return (
    <GridContainer>
      <GridItem>
        <UserInfo userName={'Osvaldo Percy'} />
      </GridItem>
      <GridItem>
        <UserInfo userName={'Ranson Sqiure'} />
      </GridItem>
      <GridItem>
        <UserInfo userName={'Sebastian waltan'} />
      </GridItem>
      <GridItem>
        <UserInfo userName={'Abraham Zack'} />
      </GridItem>
      <GridItem>
        <UserInfo userName={'Cristio leo'} />
      </GridItem>
    </GridContainer>
  )
}

const GridContainer = styled.div`
  background-color: red;
  display: grid;
  grid-template-columns: repeat(129, 10px);
  grid-template-rows: repeat(2, 311px);
  row-gap: 30px;
  justify-content: center;
  align-content: center;
`

const GridItem = styled.div`
  background-color: green;
  position: relative;

  &:first-child {
    grid-area: 1/1/2/31;

    //grid-area: 1/1 / span 1 / span 30;

    //grid-column-start: 1;
    //grid-column-end: 31;
    //grid-row-start: 1;
    //grid-row-end: 2;
  }

  &:nth-child(2) {
    grid-area: 1/34/2/86;

    //grid-area: 1/34 / span 1 / span 52;

    //grid-column-start: 34;
    //grid-column-end: 86;
    //grid-row-start: 1;
    //grid-row-end: 2;
  }

  &:nth-child(3) {
    grid-area: 2/1/3/42;

    //grid-area: 2/1 / span 1 / span 41;

    //grid-column-start: 1;
    //grid-column-end: 42;
    //grid-row-start: 2;
    //grid-row-end: 3;
  }

  &:nth-child(4) {
    grid-area: 2/45/3/86;

    //grid-area: 2/45 / span 1 / span 41;

    //grid-column-start: 45;
    //grid-column-end: 86;
    //grid-row-start: 2;
    //grid-row-end: 3;
  }

  &:last-child {
    grid-area: 1/89/3/130;

    //grid-area: 1/89 / span 2 / span 41;

    //grid-column-start: 89;
    //grid-column-end: 130;
    //grid-row-start: 1;
    //grid-row-end: 3;
  }
`
