import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const ampersand = (props: SvgType) => (
  <Svg {...props}>
    <path d="M7 4a2 2 0 0 0-2 2v3c0 .8-.2 1.6-.6 2.1-.4.6-.9.9-1.4.9.5 0 1 .3 1.4.9.4.5.6 1.3.6 2.1v3a2 2 0 0 0 2 2M17 4a2 2 0 0 1 2 2v3c0 .8.2 1.6.6 2.1.4.6.9.9 1.4.9-.5 0-1 .3-1.4.9-.4.5-.6 1.3-.6 2.1v3a2 2 0 0 1-2 2" />
  </Svg>
)

export default ampersand
