import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const beach = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17.6 16.7a7.5 7.5 0 0 0-10.7 0M18 3.8A6 6 0 0 0 9.8 6l10.4 6A6 6 0 0 0 18 3.8Zm0 0c1 .6.4 3.3-1.3 6.2M18 3.8c-1-.5-3 1.3-4.7 4.2M15 9l-3 5.2m-9 5a2.4 2.4 0 0 1 2.1 0c.4.2.7.5.9.8a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 3-.8" />
  </svg>
)

export default beach
