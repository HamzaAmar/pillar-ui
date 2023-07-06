import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const tailwind = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M11.7 6C9.2 6 7.7 7.2 7 9.7 8 8.4 9 8 10.3 8.3c.7.2 1.2.7 1.7 1.2 1 1 2 2 4.3 2 2.5 0 4-1.2 4.7-3.7-1 1.3-2 1.7-3.3 1.4C17 9 16.5 8.5 16 8c-1-1-2-2-4.3-2Zm-4 6.5c-2.5 0-4 1.2-4.7 3.7 1-1.3 2-1.7 3.3-1.4.7.2 1.2.7 1.7 1.2 1 1 2 2 4.3 2 2.5 0 4-1.2 4.7-3.7-1 1.3-2 1.7-3.3 1.4-.7-.2-1.2-.7-1.7-1.2-1-1-2-2-4.3-2Z" />
  </svg>
)

export default tailwind
