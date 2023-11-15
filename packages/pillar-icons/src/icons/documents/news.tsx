import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const news = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a3 3 0 0 0 3 3h11ZM8 8h4m-4 4h4m-4 4h4" />
  </svg>
)

export default news
