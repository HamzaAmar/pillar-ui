import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const sun = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />{' '}
  </Svg>
)

export default sun
