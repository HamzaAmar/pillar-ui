import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

const userCircle = (props: SvgType) => (
  <Svg {...props}>
    <path d="M6.2 18.8A4 4 0 0 1 10 16h4a4 4 0 0 1 3.8 2.9M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm6-2a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
  </Svg>
)

export default userCircle
