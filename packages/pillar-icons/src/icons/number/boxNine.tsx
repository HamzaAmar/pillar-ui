import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const boxNine = (props: SvgType) => (
  <Svg {...props}>
    <path d="M14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0v4a2 2 0 0 1-4 0M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z" />{' '}
  </Svg>
)

export default boxNine
