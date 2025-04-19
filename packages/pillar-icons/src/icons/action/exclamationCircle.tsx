import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

const exclamationCircle = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 9v4m0 3v0m-9-4a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
  </Svg>
)

export default exclamationCircle
