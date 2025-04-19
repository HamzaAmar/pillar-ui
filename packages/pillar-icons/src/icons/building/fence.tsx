import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 12V6L8 4 6 6v6m12 0V6l-2-2-2 2v6M4 12v4h16v-4H4Zm2 4v4h4v-4H6Zm8 0v4h4v-4h-4Z" />
  </Svg>
)

export default SvgComponent
