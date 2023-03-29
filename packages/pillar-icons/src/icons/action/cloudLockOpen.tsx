import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const cloudLockOpen = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M19 18a3.5 3.5 0 1 0 0-7h-1c.4-1.8-.3-3.6-1.8-4.8a6 6 0 0 0-5.5-1C8.8 5.8 7.4 7.2 7 9a4.6 4.6 0 0 0-4.7 3.4c-.5 2 .6 4.1 2.6 5M10 15v-2a2 2 0 0 1 3.7-1M9 15h6c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1v-3c0-.6.4-1 1-1Z" />
  </svg>
)

export default cloudLockOpen
