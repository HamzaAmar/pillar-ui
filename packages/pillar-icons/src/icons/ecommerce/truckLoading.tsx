import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const truckLoading = (props: SvgType) => (
  <Svg {...props}>
    <path d="M2 3h1a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h15M9 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9ZM7 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm9 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
  </Svg>
)
export default truckLoading
