import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const steam = (props: SvgType) => (
  <Svg {...props}>
    <path d="M16.5 5a4.5 4.5 0 1 1-.7 9l-4.3 3v0a3 3 0 0 1-2.8 3h-.2a3 3 0 0 1-3-2.4L3 16.5V13l3.5 1.8a3 3 0 0 1 2.8-.7l2.8-3.8A4.5 4.5 0 0 1 16.5 5Z" />
    <path d="M16.5 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </Svg>
)

export default steam
