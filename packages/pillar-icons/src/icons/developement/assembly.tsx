import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const assembly = (props: SvgType) => (
  <Svg {...props}>
    <path d="M19.9 6.3a2.2 2.2 0 0 1 1.1 2v7.2c0 .8-.4 1.6-1.2 2l-6.7 4.2a2.3 2.3 0 0 1-2.2 0l-6.7-4.3A2.2 2.2 0 0 1 3 15.5V8.2c0-.8.4-1.5 1.2-2l6.7-4a2.3 2.3 0 0 1 2.3 0l6.7 4h0Z" />
    <path d="M15.5 9.4c.3.2.5.5.5.9v3.3c0 .3-.2.7-.5.9l-3 1.9a1 1 0 0 1-1 0l-3-2a1 1 0 0 1-.5-.8v-3.3c0-.4.2-.7.5-.9l3-1.8a1 1 0 0 1 1 0l3 1.8h0v0Z" />
  </Svg>
)

export default assembly
