import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const click = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 12h3m6-9v3M7.8 7.8 5.6 5.6m10.6 2.2 2.2-2.2M7.8 16.2l-2.2 2.2M12 12l9 3-4 2-2 4-3-9Z" />
  </Svg>
)

export default click
