import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const alien = (props: SvgType) => (
  <Svg {...props}>
    <path d="M11 17a2.5 2.5 0 0 0 2 0m-5-6 2 2m6-2-2 2M12 3C7.3 3 4.6 5.3 4.1 8.6a11.8 11.8 0 0 0 5.2 11.7c1.7 1 3.7 1 5.4 0a11.9 11.9 0 0 0 5.2-11.7C19.4 5.3 16.7 3 12 3h0Z" />
  </Svg>
)

export default alien
