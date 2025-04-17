import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const video = (props: SvgType) => (
  <Svg {...props}>
    <path d="m15 10 5-2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-5-2v-4ZM13 6H5L3 8v8l2 2h8l2-2V8l-2-2Z" />
  </Svg>
)

export default video
