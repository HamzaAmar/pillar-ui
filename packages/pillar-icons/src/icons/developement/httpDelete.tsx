import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const httpDelete = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14 8h-4v8h4m-4-4h2.5M17 8v8h4M3 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H3Z" />
  </svg>
)

export default httpDelete
