import { CodePreview, Colors } from '../../core'
import { Table } from '@pillar-ui/core'
import * as playground from '../../core/playground'

export const mdxComponents = {
  CodePreview: CodePreview,
  Colors,
  Table,
  ...playground,
}
