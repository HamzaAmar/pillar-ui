import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const reddit = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 8c2.6 0 5 .8 6.7 2.1a2.5 2.5 0 0 1 2.3 4.4c0 3.6-4 6.5-9 6.5-4.9 0-8.8-2.8-9-6.3l-1-.2a2.5 2.5 0 0 1 2.3-4.4C6 8.8 8.3 8 11 8h1Zm0 0 1-5 6 1m-9 13c.7.3 1.3.5 2 .5s1.3-.2 2-.5m6-13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
  </svg>
)

export default reddit
