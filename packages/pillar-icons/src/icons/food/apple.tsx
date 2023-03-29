import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const apple = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 11V5a2 2 0 0 1 2-2h2v1a2 2 0 0 1-2 2h-2m-2 4.5c1.3.7 2.7.7 4 0m5 3.5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
  </svg>
)

export default apple
