import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const mantine = (props: SvgType) => (
  <Svg {...props}>
    <path d="M11 16a5 5 0 0 0 0-8m3 1h-2m2 6h-2m-2-3h0m-7 0a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
  </Svg>
)

export default mantine
