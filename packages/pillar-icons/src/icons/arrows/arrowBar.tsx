import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

export const ArrowBarTop = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 5v14m0-14 4 4m-4-4L8 9" />
  </Svg>
)
export const ArrowBarDown = ({ o, ...rest }: SvgType) => <ArrowBarTop o="b" {...rest} />
export const ArrowBarLeft = ({ o, ...rest }: SvgType) => <ArrowBarTop o="l" {...rest} />
export const ArrowBarRight = ({ o, ...rest }: SvgType) => <ArrowBarTop o="r" {...rest} />
