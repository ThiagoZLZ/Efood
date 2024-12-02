import styled from 'styled-components'
import { cores } from '../../styles'

export const List = styled.div<{ Pratos?: boolean }>`
  max-width: 1024px;
  width: 100%;
  margin: 80px auto 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  &.pratos-japoneses {
    max-width: 1140px;
    width: 100%;
    margin: 56px auto 120px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`
