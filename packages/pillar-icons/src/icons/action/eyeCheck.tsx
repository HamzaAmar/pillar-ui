import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const eyeCheck = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M11.3 15.6c-4 0-7.3-2.3-10-7 2.7-4.7 6-7 10-7s7.4 2.3 10 7l-1.3 2m-5.7 5 2 2 4-4m-7-5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
)

export default eyeCheck
