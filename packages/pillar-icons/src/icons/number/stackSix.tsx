import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const stackSex = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 0V8a2 2 0 1 1 4 0m1 9v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m2-4h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Z" />
  </Svg>
)

export default stackSex
