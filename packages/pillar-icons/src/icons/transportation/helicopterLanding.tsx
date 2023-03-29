import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const helicopterLanding = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 8v8m0-4h6m0-4v8M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z" />
  </svg>
)

export default helicopterLanding
