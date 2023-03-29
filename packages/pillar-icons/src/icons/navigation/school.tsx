import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const school = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M22 9 12 5 2 9l10 4 10-4Zm0 0v6M6 10.6V16c0 .8.6 1.6 1.8 2.1 1 .6 2.6.9 4.2.9s3.1-.3 4.2-.9c1.2-.5 1.8-1.3 1.8-2.1v-5.4" />
  </svg>
)

export default school
