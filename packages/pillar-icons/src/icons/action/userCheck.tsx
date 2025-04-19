import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

const userCheck = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-10 2 2 4-4m-9-2a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </Svg>
)

export default userCheck
