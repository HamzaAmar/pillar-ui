import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

export const ArrowTurnTop = (props: SvgType) => (
  <Svg {...props}>
    <path d="M5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 0V8a3 3 0 1 1 7 0v9a3 3 0 1 0 7 0V3m0 0-3 3m3-3 3 3" />
  </Svg>
)
export const ArrowTurnDown = ({ o, ...rest }: SvgType) => <ArrowTurnTop o="b" {...rest} />
export const ArrowTurnLeft = ({ o, ...rest }: SvgType) => <ArrowTurnTop o="l" {...rest} />
export const ArrowTurnRight = ({ o, ...rest }: SvgType) => <ArrowTurnTop o="r" {...rest} />
