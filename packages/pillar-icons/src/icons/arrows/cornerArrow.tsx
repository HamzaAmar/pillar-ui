import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

export const CornerArrowTop = (props: SvgType) => (
  <Svg {...props}>
    <path d="M18 18h-6a3 3 0 0 1-3-3V5m0 0L5 9m4-4 4 4" />
  </Svg>
)
export const CornerArrowDown = ({ o, ...rest }: SvgType) => <CornerArrowTop o="b" {...rest} />
export const CornerArrowLeft = ({ o, ...rest }: SvgType) => <CornerArrowTop o="l" {...rest} />
export const CornerArrowRight = ({ o, ...rest }: SvgType) => <CornerArrowTop o="r" {...rest} />
