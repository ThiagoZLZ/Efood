import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.vermelho};
  color: ${cores.rosa};
  display: inline-block;
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  padding: ${(props) =>
    props.size === 'big'
      ? '8px 16px'
      : props.size === 'medio'
      ? '8px 8px'
      : '5px 7px'};
  font-weight: 700;
  margin-left: 8px;
  border-radius: 5px;
`
