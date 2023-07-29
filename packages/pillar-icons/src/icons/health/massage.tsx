import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const massage = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m4 22 4-2v-3h12m-9 3h9M8 14l3-2 1-4c3 1 3 4 3 6M3 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM8 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
  </svg>
)

export default massage
