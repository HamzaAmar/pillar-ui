import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

const star = (props: SvgType) => (
  <Svg {...props}>
    <path d="m12 18-6 3 1-7-5-5 7-1 3-6 3 6 7 1-5 5 1 7-6-3Z" />
  </Svg>
)

export default star
