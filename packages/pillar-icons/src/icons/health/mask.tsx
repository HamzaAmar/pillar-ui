import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const mask = (props: SvgType) => (
  <Svg {...props}>
    <path d="M5 14.5h-.2C3.2 14.5 2 13.4 2 12s1.2-2.5 2.8-2.5H5m14 5h.2c1.6 0 2.8-1.1 2.8-2.5s-1.2-2.5-2.8-2.5H19M9 10h6m-6 4h6m-2.4 4.8 5-1.4a2 2 0 0 0 1.4-2V8.6a2 2 0 0 0-1.4-2l-5-1.3a2 2 0 0 0-1.2 0l-5 1.4a2 2 0 0 0-1.4 2v6.9a2 2 0 0 0 1.5 2l5 1.3h1Z" />
  </Svg>
)

export default mask
