import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const masterCard = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 9.8a3 3 0 1 0 0 4.4m5-2.2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2Z" />
  </Svg>
)

export default masterCard
