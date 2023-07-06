import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const whatsapp = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 1 0-1 0v1Zm0 0a5 5 0 0 0 5 5m0 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1ZM3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21Z" />
  </svg>
)

export default whatsapp
