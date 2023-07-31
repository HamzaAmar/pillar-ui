export function getScreenCoordinates(): { width: number; height: number } {
  return {
    width: window.screen.width,
    height: window.screen.height,
  }
}

export function getViewportCoordinates(): { width: number; height: number } {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

export function getURLParameters(url: string): { [key: string]: string } {
  const params = new URLSearchParams(new URL(url).search)
  const obj: { [key: string]: string } = {}
  for (const [key, value] of params.entries()) {
    obj[key] = value
  }
  return obj
}

export function getBrowserName(): string {
  const userAgent = navigator.userAgent

  if (/MSIE|Trident/i.test(userAgent)) {
    return 'Internet Explorer'
  }
  if (/Edg\/\d./i.test(userAgent)) {
    return 'Microsoft Edge'
  }
  if (/Chrome/i.test(userAgent)) {
    return 'Google Chrome'
  }
  if (/Firefox/i.test(userAgent)) {
    return 'Mozilla Firefox'
  }
  if (/Safari/i.test(userAgent)) {
    return 'Safari'
  }
  if (/Opera/i.test(userAgent)) {
    return 'Opera'
  }

  return 'Unknown'
}
