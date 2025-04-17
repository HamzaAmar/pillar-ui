import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

export const ChevronTop = (props: SvgType) => (
  <Svg {...props}>
    <path d="m6 15 6-6 6 6" />
  </Svg>
)
export const ChevronDown = ({ o, ...rest }: SvgType) => <ChevronTop o="b" {...rest} />
export const ChevronLeft = ({ o, ...rest }: SvgType) => <ChevronTop o="l" {...rest} />
export const ChevronRight = ({ o, ...rest }: SvgType) => <ChevronTop o="r" {...rest} />
