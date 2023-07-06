import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const unsplash = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 11h5v4h6v-4h5v9H4v-9Zm5-7h6v4H9V4Z" />
  </svg>
)

export default unsplash
