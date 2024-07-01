'use client'

import { IconButton } from '~/component/core/pillar'
import { useCopyToClipboard } from '~/hooks/pillar'
import { Check, Copy } from '@pillar-ui/icons'
import { Colors } from '~/constant/colors/colors.type'

interface CopyButtonProps {
  item: string
  value: Colors[1]
}
const CopyButton = ({ item, value }: CopyButtonProps) => {
  const { copied, copy } = useCopyToClipboard(1500)

  function handleClick() {
    const { light, dark } = value
    let colors = `// ${item} Light Color Section \n`
    light.forEach((color, index) => {
      colors += `--${item}-light-${index + 1}:hsl(${color});\n`
    })

    colors += `// ${item} Dark Color Section \n`
    dark.forEach((color, index) => {
      colors += `--${item}-dark-${index + 1}:hsl(${color});\n`
    })
    copy(colors)
  }

  return (
    <IconButton
      variant={`${!copied ? 'outline' : 'soft'}`}
      color="surface"
      icon={copied ? <Check /> : <Copy />}
      title={`${copied ? 'Copied' : 'Copy'} Color`}
      onClick={handleClick}
    />
  )
}

export default CopyButton
