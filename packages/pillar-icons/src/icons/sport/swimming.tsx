import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const soccerField = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m6 11 4-2 3.5 3-1.5 2m-9 2.8a2.4 2.4 0 0 0 2.1 0c.4-.2.7-.5.9-.8a2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 3 .8M17 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
)

export default soccerField
