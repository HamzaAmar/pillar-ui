import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

export const ArrowsTop = (props: SvgType) => (
  <Svg {...props}>
    <path d="M17 3v18m0-18 3 3m-3-3-3 3M4 6l3-3m0 0 3 3M7 3v18" />
  </Svg>
)
export const ArrowsDown = ({ o, ...rest }: SvgType) => <ArrowsTop o="b" {...rest} />
export const ArrowsLeft = ({ o, ...rest }: SvgType) => <ArrowsTop o="l" {...rest} />
export const ArrowsRight = ({ o, ...rest }: SvgType) => <ArrowsTop o="r" {...rest} />
export const ArrowsTopLeft = ({ o, ...rest }: SvgType) => <ArrowsTop o="lt" {...rest} />
export const ArrowsTopRight = ({ o, ...rest }: SvgType) => <ArrowsTop o="rt" {...rest} />
export const ArrowsBottomRight = ({ o, ...rest }: SvgType) => <ArrowsTop o="rb" {...rest} />
export const ArrowsBottomLeft = ({ o, ...rest }: SvgType) => <ArrowsTop o="lb" {...rest} />
