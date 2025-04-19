import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const annoyed = (props: SvgType) => (
  <Svg {...props}>
    <path d="M15 14c-2 0-3 1-3.5 2M9 10h0m6 0h0m-3 11a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" />
  </Svg>
)
export default annoyed
