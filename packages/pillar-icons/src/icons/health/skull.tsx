import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const skull = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 17v3m4-3v3M12 4c4.4 0 8 3.4 8 7.5 0 1.9-.8 3.6-2 5V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2.5c-1.2-1.4-2-3.1-2-5C4 7.4 7.6 4 12 4Zm-4 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm6 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
  </Svg>
)

export default skull
