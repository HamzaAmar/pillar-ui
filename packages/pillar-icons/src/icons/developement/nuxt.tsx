import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const nuxt = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m12.1 8.6-1.3-2.1a1 1 0 0 0-1.7 0l-6 10a1 1 0 0 0 1 1.5H8m12 0c.8 0 1.2-.8.9-1.5l-4-7a1 1 0 0 0-1.7 0l-4 7c-.4.7 0 1.5.8 1.5h8Z" />
  </svg>
)

export default nuxt
