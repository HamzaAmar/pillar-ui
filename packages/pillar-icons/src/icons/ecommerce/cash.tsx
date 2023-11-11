import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const cash = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2m0-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6Zm5 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
  </svg>
)
export default cash
