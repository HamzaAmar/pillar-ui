import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const userInfo = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m4-14v3m0 4v0m-6-7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </svg>
)

export default userInfo
