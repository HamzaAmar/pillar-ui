import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const variables = (props: SvgType) => (
  <Svg {...props}>
    <path d="M5 4C2.5 9 2.5 14 5 20M19 4c2.5 5 2.5 10 0 16M9 9h1c1 0 1 1 2 3.5s1 3.5 2 3.5h1m-7 0c1.5 0 3-2 4-3.5S14.5 9 16 9" />
  </Svg>
)

export default variables
