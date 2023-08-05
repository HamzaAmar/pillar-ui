import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const window = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 3a7 7 0 0 0-7 7v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10a7 7 0 0 0-7-7Zm0 0v18m-7-8h14" />
  </svg>
)

export default window
