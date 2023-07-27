import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const vercel = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 19h18L12 4 3 19Z" />
  </svg>
)

export default vercel
