import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const soccerField = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 5v14m3-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM3 9h3v6H3V9Zm15 0h3v6h-3V9ZM5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2Z" />
  </Svg>
)

export default soccerField
