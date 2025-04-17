import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const silence = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 10h0m6 0h0m-7 5h8m-7-1v2m3-2v2m3-2v2m-3 5a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" />
  </Svg>
)
export default silence
