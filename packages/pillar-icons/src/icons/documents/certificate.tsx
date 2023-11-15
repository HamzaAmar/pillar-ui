import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const certificate = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M13 17.5V22l2-1.5 2 1.5v-4.5M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-1 1.7M6 9h12M6 12h3m-3 3h2m4 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
  </svg>
)

export default certificate
