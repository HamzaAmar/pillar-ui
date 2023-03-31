import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const userMinus = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14.3 10.3a4 4 0 1 0-5.6-5.6m-.5 3.5a4 4 0 0 0 2.6 2.6M6 21v-2a4 4 0 0 1 4-4h4c.4 0 .8 0 1.1.2m2.7 2.7L18 19v2M3 3l18 18" />
  </svg>
)

export default userMinus
