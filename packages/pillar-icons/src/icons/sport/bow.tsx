import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const bow = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 3h4m0 0v4m0-4L6 18m0 0H3m3 0v3m10.5-1a9.5 9.5 0 0 0 2.5-6.5C19 8.7 15.3 5 10.5 5 8.1 5 5.5 6 4 7.5L16.5 20Z" />
  </svg>
)

export default bow
