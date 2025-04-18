import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bitBucket = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 4a1 1 0 0 0-1 1l3 14 1 1h10a1 1 0 0 0 1-1l3-14a1 1 0 0 0-1-1H4Z" />
    <path d="M14 15h-4L9 9h6l-1 6Z" />
  </Svg>
)

export default bitBucket
