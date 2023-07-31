export const storageService = {
  getItem: (key: string): string | null => {
    try {
      return window.localStorage.getItem(key)
    } catch (error) {
      console.error(`Error reading local storage for key "${key}": ${error}`)
      return null
    }
  },
  setItem: (key: string, value: string): boolean => {
    try {
      window.localStorage.setItem(key, value)
      return true
    } catch (error) {
      console.error(`Error updating local storage for key "${key}": ${error}`)
      return false
    }
  },
  removeItem: (key: string): boolean => {
    try {
      window.localStorage.removeItem(key)
      return true
    } catch (error) {
      console.error(`Error removing value from local storage for key "${key}": ${error}`)
      return false
    }
  },
}
