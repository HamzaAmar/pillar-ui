import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const linkdin = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 11v5m0-8v0m4 8v-5m4 5v-3a2 2 0 0 0-4 0M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z" />
  </svg>
)

export default linkdin
