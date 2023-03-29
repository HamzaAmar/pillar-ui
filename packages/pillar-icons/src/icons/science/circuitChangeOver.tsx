import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const circuitChangeOver = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M2 12h2m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm16-5h2m-2 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m0 0-8.5 3.5M20 17h2m-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
)

export default circuitChangeOver
