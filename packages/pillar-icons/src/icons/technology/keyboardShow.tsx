import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const tv = (props: SvgType) => (
  <Svg {...props}>
    <path d="M6 11v0m12 0v0m-8 0h4m-4 8 2 2 2-2M4 3h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Z" />
  </Svg>
)

export default tv
