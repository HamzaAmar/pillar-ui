import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const planet = (props: SvgType) => (
  <Svg {...props}>
    <path d="M18.8 13.6c2.3 2.1 3.6 4 3.1 4.9-.7 1.4-5.8-.3-11.2-3.9C5.2 11.1 1.3 7 2 5.6c.5-1 3-.5 5.8.7M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
  </Svg>
)

export default planet
