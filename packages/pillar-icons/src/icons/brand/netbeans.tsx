import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 21v-9m0 0L4.5 7.5M12 12l7.5-4.5M12 3v4.5m7.5 8.5L16 14m-8 0-3.5 2M19 6.9a2 2 0 0 1 1 1.7v6.6a2 2 0 0 1-1 1.7l-6 3.8a2 2 0 0 1-2 0L5 17a2 2 0 0 1-1-1.7V8.6A2 2 0 0 1 5 7l6-3.6a2 2 0 0 1 2 0l6 3.6h0Zm-3.5 2.5a1 1 0 0 1 .5.9v3.3a1 1 0 0 1-.5.8l-3 2a1 1 0 0 1-1 0l-3-2a1 1 0 0 1-.5-.8v-3.3a1 1 0 0 1 .5-.9l3-1.8a1 1 0 0 1 1 0l3 1.8h0Z" />
  </svg>
)

export default SvgComponent
