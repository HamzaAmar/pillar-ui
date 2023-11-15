import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const httpGet = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 8H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4H6m8-4h-4v8h4m-4-4h2.5M17 8h4m-2 0v8" />
  </svg>
)

export default httpGet
