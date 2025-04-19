import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const aspectRatio = (props: SvgType) => (
  <Svg {...props}>
    <path d="M6 12a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v8M6 8V4m6 14a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4m6 5a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v11m0-15V4" />{' '}
  </Svg>
)

export default aspectRatio
