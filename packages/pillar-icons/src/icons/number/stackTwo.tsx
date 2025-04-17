import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const stackTwo = (props: SvgType) => (
  <Svg {...props}>
    <path d="M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m5 1a2 2 0 1 1 4 0c0 .6-.4 1.3-.8 1.9L12 14h4M9 3h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Z" />
  </Svg>
)

export default stackTwo
