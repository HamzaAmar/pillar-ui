import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const videoPlus = (props: SvgType) => (
  <Svg {...props}>
    <path d="M7 12h4m-2-2v4m6-4 5-2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-5-2v-4ZM5 6h8l2 2v8l-2 2H5l-2-2V8l2-2Z" />
  </Svg>
)

export default videoPlus
