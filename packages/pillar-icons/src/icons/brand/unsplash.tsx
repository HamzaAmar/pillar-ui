import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const unsplash = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 11h5v4h6v-4h5v9H4v-9Zm5-7h6v4H9V4Z" />
  </Svg>
)

export default unsplash
