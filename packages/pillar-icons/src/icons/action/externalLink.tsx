import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const externalLink = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m0 0h-5m5 0v5" />
  </svg>
)

export default externalLink
