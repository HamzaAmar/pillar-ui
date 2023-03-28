import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const speaker = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 7v4m-2-8h4a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z" />
  </svg>
)

export default speaker
