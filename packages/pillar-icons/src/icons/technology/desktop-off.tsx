import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const desktopOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 4h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1m-4 0H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m3 16h10m-8-4v4m6-4v4M3 3l18 18" />
  </svg>
)

export default desktopOff
