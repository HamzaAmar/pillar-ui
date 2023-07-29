import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const dollarFace = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M20.9 10.5a9 9 0 1 0-8 10.4M9 10h0m6 0h0m-5.5 5a3.6 3.6 0 0 0 3.5.8m8-.8h-2.5a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 1 1 0 3H17m2 0v1m0-8v1" />
  </svg>
)
export default dollarFace
