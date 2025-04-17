import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const worldLongitude = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18V3m-.5 0a11.2 11.2 0 0 0 0 18m1-18a11.2 11.2 0 0 1 0 18" />{' '}
  </Svg>
)

export default worldLongitude
