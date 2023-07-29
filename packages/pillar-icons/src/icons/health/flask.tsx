import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const flask = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6.1 15h11.8M9 3h6m-1 0v7.3A6 6 0 0 1 15.3 21H8.7A6 6 0 0 1 10 10.3V3h4Z" />
  </svg>
)

export default flask
