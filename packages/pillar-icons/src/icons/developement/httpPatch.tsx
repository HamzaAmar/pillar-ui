import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const httpPut = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 12h2a2 2 0 1 0 0-4H3v8m7 0v-6a2 2 0 1 1 4 0v6m-4-3h4m3-5h4m-2 0v8" />
  </svg>
)

export default httpPut
