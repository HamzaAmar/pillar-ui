import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

export const DotsHorizontal = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </Svg>
)

export const DotsVertical = ({ o, ...rest }: SvgType) => <DotsHorizontal o="l" {...rest} />
