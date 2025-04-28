import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

export const ArrowTailTop = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 18V3m0 15 3 3m-3-3-3 3m3-18 3 3m-3-3L9 6" />
  </Svg>
)
export const ArrowTailDown = ({ o, ...rest }: SvgType) => <ArrowTailTop o="b" {...rest} />
export const ArrowTailLeft = ({ o, ...rest }: SvgType) => <ArrowTailTop o="l" {...rest} />
export const ArrowTailRight = ({ o, ...rest }: SvgType) => <ArrowTailTop o="r" {...rest} />
