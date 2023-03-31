import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const userDelete = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m2-12 4 4m0-4-4 4m-4-6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </svg>
)

export default userDelete
