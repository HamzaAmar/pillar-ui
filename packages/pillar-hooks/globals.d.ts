type ExitFullscreen = typeof document.exitFullscreen
type RequestFullscreen = typeof document.documentElement.requestFullscreen

declare global {
  interface Document {
    webkitExitFullscreen: ExitFullscreen
    mozCancelFullScreen: ExitFullscreen
    msExitFullscreen: ExitFullscreen
  }

  interface HTMLElement {
    webkitRequestFullscreen: RequestFullscreen
    msRequestFullscreen: RequestFullscreen
    webkitEnterFullscreen: RequestFullscreen
    mozRequestFullscreen: RequestFullscreen
  }
}
