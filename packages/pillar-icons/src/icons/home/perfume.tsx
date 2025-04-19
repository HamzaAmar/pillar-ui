import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const perfume = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 6v3m4-3v3m-9 2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8Zm5 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM9 3h6v3H9V3Z" />
  </Svg>
)

export default perfume
