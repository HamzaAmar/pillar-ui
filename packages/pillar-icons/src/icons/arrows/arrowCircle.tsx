import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

export const ArrowCircleTop = (props: SvgType) => (
  <Svg {...props}>
    <path d="m12 8-4 4m4-4v8m0-8 4 4M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
  </Svg>
)
export const ArrowCircleDown = ({ o, ...rest }: SvgType) => <ArrowCircleTop o="b" {...rest} />
export const ArrowCircleLeft = ({ o, ...rest }: SvgType) => <ArrowCircleTop o="l" {...rest} />
export const ArrowCircleRight = ({ o, ...rest }: SvgType) => <ArrowCircleTop o="r" {...rest} />
export const ArrowCircleTopLeft = ({ o, ...rest }: SvgType) => <ArrowCircleTop o="lt" {...rest} />
export const ArrowCircleTopRight = ({ o, ...rest }: SvgType) => <ArrowCircleTop o="rt" {...rest} />
export const ArrowCircleBottomRight = ({ o, ...rest }: SvgType) => <ArrowCircleTop o="rb" {...rest} />
export const ArrowCircleBottomLeft = ({ o, ...rest }: SvgType) => <ArrowCircleTop o="lb" {...rest} />
