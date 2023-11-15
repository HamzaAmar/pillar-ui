import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const clipboardData = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path
      d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 17v-4m3 4v-1m3 1v-2
    "
    />
  </svg>
)

export default clipboardData
