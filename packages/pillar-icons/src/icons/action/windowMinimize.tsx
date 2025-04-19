import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

const toggleRight = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6m3-7h-4m0 0V9m0 4 5-5M4 16h3c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1v-3c0-.6.4-1 1-1Z" />
  </Svg>
)

export default toggleRight
