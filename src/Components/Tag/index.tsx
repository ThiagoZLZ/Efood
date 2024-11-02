import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'medio' | 'big'
  children: string
}

const Tag = ({ size, children }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
