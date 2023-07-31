export interface DocumentElementType extends HTMLElement {
  webkitRequestFullscreen(): Promise<void>
  msRequestFullscreen(): Promise<void>
  webkitEnterFullscreen(): Promise<void>
  mozRequestFullscreen(): Promise<void>
}

export interface DocumentType extends Document {
  mozCancelFullScreen(): Promise<void>
  webkitExitFullscreen(): Promise<void>
  msExitFullscreen(): Promise<void>
}
