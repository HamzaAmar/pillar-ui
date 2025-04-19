import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const plant = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 12h3a6 6 0 0 0 6-6V5h-3a6 6 0 0 0-6 6H9a6 6 0 0 1-6-6V3h3a6 6 0 0 1 6 6v6m-5 0h10v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4Z" />
  </Svg>
)
export default plant
