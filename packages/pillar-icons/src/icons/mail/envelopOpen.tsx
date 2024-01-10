import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const envelopOpen = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m3 9 9 6 9-6M3 9l9-6 9 6M3 9v10M21 9v10m0 0a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m18 0-6-6M3 19l6-6" />
  </svg>
)

export default envelopOpen
