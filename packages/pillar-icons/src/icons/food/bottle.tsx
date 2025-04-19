import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bottle = (props: SvgType) => (
  <Svg {...props}>
    <path d="M14 3.5c0 1.6.5 3.2 1.4 4.5l.1.1a8 8 0 0 1 1.5 4.7V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6.2a8 8 0 0 1 1.5-4.7h0c1-1.4 1.5-3 1.5-4.6M7 14.8c.4-.2.7-.4 1-.8a2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1c.3-.4.6-.6 1-.8M10 5h4V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Z" />
  </Svg>
)

export default bottle
