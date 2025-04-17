import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const chrome = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 0h8.4m-5.8 4.5-4.2 7.3m-1-7.3L5.2 6.2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </Svg>
)

export default chrome
