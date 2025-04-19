import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M13 5h8m-8 4h5m-5 6h8m-8 4h5M4 4h4c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V5c0-.6.4-1 1-1Zm0 10h4c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1v-4c0-.6.4-1 1-1Z" />
  </Svg>
)

export default justify
