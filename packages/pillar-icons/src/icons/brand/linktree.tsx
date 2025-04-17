import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const linktree = (props: SvgType) => (
  <Svg {...props}>
    <path d="m12 8-4 7h2v5H5v-5H2L9 3l3 5Zm0 0 4 7h-2v5h5v-5h3L15 3l-3 5Z" />
  </Svg>
)

export default linktree
