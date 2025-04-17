import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const floppy = (props: SvgType) => (
  <Svg {...props}>
    <path d="M14 4v4H8V4M6 4h10l4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm8 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </Svg>
)

export default floppy
