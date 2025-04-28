import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

export const ArrowMoveTop = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 13V3m0 0L9 6m3-3 3 3m-3 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
  </Svg>
)
export const ArrowMoveDown = ({ o, ...rest }: SvgType) => <ArrowMoveTop o="b" {...rest} />
export const ArrowMoveLeft = ({ o, ...rest }: SvgType) => <ArrowMoveTop o="l" {...rest} />
export const ArrowMoveRight = ({ o, ...rest }: SvgType) => <ArrowMoveTop o="r" {...rest} />
