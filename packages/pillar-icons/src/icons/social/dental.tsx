import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const dental = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12.4 5.5c-1-.6-2.6-1.5-4-1.5-2.1 0-4 1.2-4 5 0 4.9 1 8.4 2.7 10.5.5.8 2 .6 2.5-.2.4-.5.9-1.4 1.3-2.8.3-.8.9-1.5 1.5-1.5s1.2.7 1.5 1.5c.4 1.4.9 2.3 1.3 2.8.6.8 2 1 2.5.2 1.6-2 2.7-5.6 2.7-10.5 0-3.7-2-5-4-5-1.4 0-3 1-4 1.5Zm0 0 3 1.5" />
  </svg>
)

export default dental
