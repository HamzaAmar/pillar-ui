import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const sofa = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 11.5a2 2 0 0 1 2 2v1h12v-1a2 2 0 0 1 2-2m-16 0a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-5a2 2 0 0 0-2-2m-16 0v-3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3m-8-6v9" />
  </svg>
)

export default sofa
