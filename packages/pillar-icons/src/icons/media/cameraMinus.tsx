import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const cameraMinus = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 4H9a1 1 0 0 0-1 1 2 2 0 0 1-2 2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8m-6-4h6m-6 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
)

export default cameraMinus
