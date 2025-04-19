import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

const starOff = (props: SvgType) => (
  <Svg {...props}>
    <path d="m3 3 18 18M10 6l2-4 3 6 7 1-4 5m0 4v3l-6-3-6 3 1-7-5-5 6-1" />
  </Svg>
)

export default starOff
