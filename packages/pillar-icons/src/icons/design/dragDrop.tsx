import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const cut = (props: SvgType) => (
  <Svg {...props}>
    <path d="M19 11V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2M3 3v0m4 0v0m4 0v0m4 0v0M3 7v0m0 4v0m0 4v0m10-2 9 3-4 2-2 4-3-9Z" />
  </Svg>
)

export default cut
