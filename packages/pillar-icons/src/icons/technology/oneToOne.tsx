import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const manyToMany = (props: SvgType) => (
  <Svg {...props}>
    <path d="M7 10h1v4m6 0v-4l3 4v-4m-6 .5v0m0 3v0M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2Z" />
  </Svg>
)

export default manyToMany
