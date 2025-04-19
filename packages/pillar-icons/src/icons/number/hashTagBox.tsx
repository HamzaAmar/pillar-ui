import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const hashtagBox = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 8v8m4-8v8m-6-6h8m-8 4h8M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z" />
  </Svg>
)

export default hashtagBox
