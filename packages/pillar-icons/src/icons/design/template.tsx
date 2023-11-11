import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const template = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14 12h6m-6 4h6m-6 4h6M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm0 8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Z" />
  </svg>
)

export default template
