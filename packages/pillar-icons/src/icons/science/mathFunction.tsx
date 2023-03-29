import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const mathFunction = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14 10h1c1 0 1 1 2 3.5s1 3.5 2 3.5h1m-7 0c1.5 0 3-2 4-3.5s2.5-3.5 4-3.5M3 19c0 1.5.5 2 2 2s2-4 3-9 1.5-9 3-9 2 .5 2 2m-8 7h6" />
  </svg>
)

export default mathFunction
