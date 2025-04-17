import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const carCrane = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 0v-5h9m-5 6h8m4 0h2v-6m0 0a5 5 0 0 0-5-5h-1m6 5h-4.5L15 7m0 0h-3v11m-8-6V6m0 0 18-3v2M4 6l4 2v4m11 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </Svg>
)

export default carCrane
