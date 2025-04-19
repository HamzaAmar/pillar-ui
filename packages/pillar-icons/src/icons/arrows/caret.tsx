import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

export const CaretTop = (props: SvgType) => (
  <Svg {...props}>
    <path d="m18 14-6-6-6 6h12Z" />
  </Svg>
)
export const CaretDown = ({ o, ...rest }: SvgType) => <CaretTop o="b" {...rest} />
export const CaretLeft = ({ o, ...rest }: SvgType) => <CaretTop o="l" {...rest} />
export const CaretRight = ({ o, ...rest }: SvgType) => <CaretTop o="r" {...rest} />
