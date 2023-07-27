import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const api = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 13h5m3 3V8h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-3m8-5v8M9 16v-5.5a2.5 2.5 0 1 0-5 0V16" />
  </svg>
)

export default api
