import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

export const ArrowTop = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 5v14m0-14 6 6m-6-6-6 6" />
  </Svg>
)
export const ArrowDown = ({ o, ...rest }: SvgType) => <ArrowTop o="b" {...rest} />
export const ArrowLeft = ({ o, ...rest }: SvgType) => <ArrowTop o="l" {...rest} />
export const ArrowRight = ({ o, ...rest }: SvgType) => <ArrowTop o="r" {...rest} />
export const ArrowTopLeft = ({ o, ...rest }: SvgType) => <ArrowTop o="lt" {...rest} />
export const ArrowTopRight = ({ o, ...rest }: SvgType) => <ArrowTop o="rt" {...rest} />
export const ArrowBottomRight = ({ o, ...rest }: SvgType) => <ArrowTop o="rb" {...rest} />
export const ArrowBottomLeft = ({ o, ...rest }: SvgType) => <ArrowTop o="lb" {...rest} />
