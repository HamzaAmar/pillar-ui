import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const capture = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2m-5-4a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
)

export default capture
