import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const npm = (props: SvgType) => (
  <Svg {...props}>
    <path d="M7 15v2h4v-2h12V8H1v7h6Zm0 0V8m7 0v7m3-4v4M4 11v4m7-4v1m9-1v4" />
  </Svg>
)

export default npm
