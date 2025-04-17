import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

export const CornersArrowTop = (props: SvgType) => (
  <Svg {...props}>
    <path d="M18 19h-6a3 3 0 0 1-3-3V9m0 0 4 4M9 9l-4 4m8-5L9 4 5 8" />
  </Svg>
)
export const CornersArrowDown = ({ o, ...rest }: SvgType) => <CornersArrowTop o="b" {...rest} />
export const CornersArrowLeft = ({ o, ...rest }: SvgType) => <CornersArrowTop o="l" {...rest} />
export const CornersArrowRight = ({ o, ...rest }: SvgType) => <CornersArrowTop o="r" {...rest} />
