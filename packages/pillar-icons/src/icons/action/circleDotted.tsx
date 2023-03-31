import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const circleDotted = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7.5 4.2v0M4.2 7.5v0M3 12v0m1.2 4.5v0m3.3 3.3v0M12 21v0m4.5-1.2v0m3.3-3.3v0M21 12v0m-1.2-4.5v0m-3.3-3.3v0M12 3v0" />
  </svg>
)

export default circleDotted
