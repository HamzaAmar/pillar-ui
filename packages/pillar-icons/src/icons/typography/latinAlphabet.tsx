import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 10h2a2 2 0 0 1 2 2v5H7a2 2 0 1 1 0-4h3m4-6v10m2-7h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3c0-1.1.9-2 2-2Z" />
  </svg>
)

export default justify
