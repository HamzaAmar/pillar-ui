import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const star = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m12 18-6 3 1-7-5-5 7-1 3-6 3 6 7 1-5 5 1 7-6-3Z" />
  </svg>
)

export default star
