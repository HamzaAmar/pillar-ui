import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const arch = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 21h18M4 21V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v15M9 21v-8a3 3 0 0 1 6 0v8" />
  </svg>
)

export default arch
