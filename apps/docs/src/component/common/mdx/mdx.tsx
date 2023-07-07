import { CodePreview, Colors } from '../../core'
import * as playground from '../../core/playground'

export const mdxComponents = {
  CodePreview: CodePreview,
  Colors,
  ...playground,
}
