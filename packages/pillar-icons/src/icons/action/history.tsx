import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

const filterOff = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 8v4l2 2M3 11a9 9 0 1 1 .5 4M3 20v-5h5" />
  </Svg>
)

export default filterOff
