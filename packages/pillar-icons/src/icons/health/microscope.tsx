import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const microscope = (props: SvgType) => (
  <Svg {...props}>
    <path d="M5 21h14M6 18h2m-1 0v3m3.5-8.5L9 14m8-11 3 3m-8 15a6 6 0 0 0 3.7-10.7M9 11l3 3 6-6-3-3-6 6Z" />
  </Svg>
)

export default microscope
