import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const boxEight = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z" />
  </Svg>
)

export default boxEight
