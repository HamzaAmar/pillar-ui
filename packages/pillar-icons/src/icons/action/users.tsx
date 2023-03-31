import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const user = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </svg>
)

export default user
