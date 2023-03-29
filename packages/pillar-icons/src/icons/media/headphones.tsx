import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const headphones = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 15v3l2 2h1l2-2v-3l-2-2H6l-2 2Zm0 0v-3a8 8 0 1 1 16 0v3m0 0-2-2h-1l-2 2v3l2 2h1l2-2v-3Z" />
  </svg>
)

export default headphones
