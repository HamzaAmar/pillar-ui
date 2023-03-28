import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M19.7 15.1a8 8 0 0 0 0-4.3M14 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm3.7 2.4A8 8 0 0 0 14 5.2l3.7 2.2ZM10 5.2a8 8 0 0 0-3.8 2.3L10 5.2Zm-5.7 5.5a8 8 0 0 0 0 4.4v-4.4Zm2 7.9a8 8 0 0 0 3.7 2.1l-3.8-2.1Zm7.7 2.1a8 8 0 0 0 3.8-2.1L14 20.7ZM7 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
)

export default SvgComponent
