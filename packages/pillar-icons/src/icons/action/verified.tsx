import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const verified = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m9 12 2 2 4-4M5 7.2A2.2 2.2 0 0 1 7.2 5h1c.6 0 1.1-.2 1.5-.6l.8-.7a2.2 2.2 0 0 1 3 0l.8.7c.4.4 1 .6 1.5.6h1A2.2 2.2 0 0 1 19 7.2v1c0 .6.3 1.1.7 1.5l.7.8a2.2 2.2 0 0 1 0 3l-.7.8c-.4.4-.7 1-.7 1.5v1a2.2 2.2 0 0 1-2.2 2.2h-1c-.6 0-1.1.3-1.5.7l-.7.7a2.2 2.2 0 0 1-3.2 0l-.7-.7c-.4-.4-1-.7-1.5-.7h-1A2.2 2.2 0 0 1 5 16.8v-1c0-.6-.2-1.1-.6-1.5l-.7-.7a2.2 2.2 0 0 1 0-3.2l.7-.7c.4-.4.6-1 .6-1.5v-1Z" />
  </svg>
)

export default verified
