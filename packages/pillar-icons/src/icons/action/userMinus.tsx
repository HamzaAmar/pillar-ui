import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const userMinus = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-10h6m-9-4a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </svg>
)

export default userMinus
