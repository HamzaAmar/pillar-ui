import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const microscope = (props: SvgType) => (
  <Svg {...props}>
    <path d="m11 21-1-4-2-3V8m0 0-4 3 1 3m3-6 3 2 3 .5M7 17l-2 4m11 0v-8.5a1.5 1.5 0 1 1 3 0v.5M7 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
  </Svg>
)

export default microscope
