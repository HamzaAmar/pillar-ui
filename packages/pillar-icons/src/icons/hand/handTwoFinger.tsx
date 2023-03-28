import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const handTwoFinger = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M11 12V4.5a1.5 1.5 0 1 0-3 0V13l-1.5-1.5a1.9 1.9 0 0 0-2.3-.3 1.5 1.5 0 0 0-.5 2 194.7 194.7 0 0 0 3.5 6.1 6 6 0 0 0 5 2.7H12h2a6 6 0 0 0 6-6v-4.5a1.5 1.5 0 1 0-3 0m-3-1a1.5 1.5 0 1 1 3 0V12m-6-6.5v-2a1.5 1.5 0 1 1 3 0V12" />
  </svg>
)

export default handTwoFinger
