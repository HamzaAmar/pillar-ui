import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const piano = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 19v-5M8 5v8h2V5m5 14v-5m-1-8v7h2V6M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
  </svg>
)

export default piano
