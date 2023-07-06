import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const meta = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 10.2C13.8 7.4 15.3 6 16.6 6c2 0 3.3 2.2 4 5.2.8 2.9.5 6.8-2 6.8-1 0-2.6-1.6-4.1-3.7-1-1.3-1.8-2.7-2.5-4.1Zm0 0C10.2 7.4 8.7 6 7.4 6c-2 0-3.3 2.2-4 5.2-.8 2.9-.5 6.8 2 6.8 1 0 2.6-1.6 4.1-3.7 1-1.3 1.8-2.7 2.5-4.1Z" />
  </svg>
)

export default meta
