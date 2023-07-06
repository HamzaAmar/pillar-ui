import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const manyToMany = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 17v0m-4 0v0m2-4v-2m-3.3-2.3a4 4 0 0 1 6.6 0M8.4 6.5a8 8 0 0 1 13 0M5 13h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2Z" />
  </svg>
)

export default manyToMany
