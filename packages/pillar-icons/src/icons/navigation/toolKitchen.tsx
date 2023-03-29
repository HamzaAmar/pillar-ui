import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const toolKitchen = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M19 15V3c-4.8 4.6-5 8.3-5 12h5Zm0 0v6h-1v-3l1-3ZM8 4v17M5 4v3a3 3 0 1 0 6 0V4" />
  </svg>
)

export default toolKitchen
