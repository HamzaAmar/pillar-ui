import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const sousage = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5.2 5.5 4 3.5A1 1 0 0 1 4.8 2h1.4A1 1 0 0 1 7 3.5l-1.2 2m12.7 12.7 2-1.2a1 1 0 0 1 1.5.8v1.4a1 1 0 0 1-1.5.9l-2-1.3M5.5 5.5A2.5 2.5 0 0 0 3 8a13 13 0 0 0 13 13 2.5 2.5 0 0 0 0-5 8 8 0 0 1-8-8 2.5 2.5 0 0 0-2.5-2.5Z" />
  </svg>
)

export default sousage
