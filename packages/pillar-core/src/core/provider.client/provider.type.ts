export interface CreateContextParams<T> {
  name: string
  initValue?: T
  error?: string
  required?: boolean
}
