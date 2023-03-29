import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const pinOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m3 3 18 18M15 4.5l-3.2 3.2m4.4 4.6L19.6 9M9 15l-4.5 4.5M14.5 4 20 9.5M9.2 9.2 7 10l-1.5 1.5 7 7L14 17l.8-2.2-5.6-5.6Z" />
  </svg>
)

export default pinOff
