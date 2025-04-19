import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const sun = (props: SvgType) => (
  <Svg {...props}>
    <path d="M14.5 10A4 4 0 1 0 9 15.5M2 12h1m8-9v1m0 16v1M4.6 5.6l.7.7m12.1-.7-.7.7M5.3 17.7l-.7.7M15 13h5a2 2 0 0 0 0-4m-8 7h6a2 2 0 1 1 0 4h-.3" />
  </Svg>
)

export default sun
