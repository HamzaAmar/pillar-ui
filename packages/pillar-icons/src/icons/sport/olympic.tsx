import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const olympic = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0a3 3 0 1 0 6 0M9 9a3 3 0 1 1 6 0m0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm-3 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />{' '}
  </svg>
)

export default olympic
