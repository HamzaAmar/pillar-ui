import { useState } from 'react'
import { DocsLayout } from '../../component/common'
import { Button, ButtonProps, Flex, InputSearch, Paper, Text } from '@pillar/core'
import { ICONS_SECTION, allIcons } from '../../constant/icons'
import { useCopyToClipboard } from '@pillar/hooks'

const Icons = () => {
  const { copyText, copied } = useCopyToClipboard()
  const [current, setCurrent] = useState('arrows')
  const iconList = current !== 'all' ? allIcons[current] : null

  return (
    <DocsLayout>
      <div className="l_flow__lg">
        <InputSearch placeholder="Filter Icons" aria-label="Search Icon" name="search" fluid />
        <Paper as={Flex} p="md" style={{ overflow: 'auto hidden' }} gap="sm">
          {ICONS_SECTION.map((value) => {
            const isActive = current === value
            const buttonStyle: Partial<ButtonProps> = isActive
              ? { color: 'primary', variant: 'solid' }
              : { color: 'surface', variant: 'outline' }
            return (
              <Button key={value} {...buttonStyle} onClick={() => setCurrent(value)} size="xs" corner="full">
                {value}
              </Button>
            )
          })}
        </Paper>
        <Flex gap="sm" wrap>
          {Object.entries(iconList).map(([title, Icon], key) => (
            <div key={key}>
              <Paper p="sm" shadow="sm" background="surface-6">
                <Icon width="24" />
              </Paper>
              <Button corner="sharp" size="xs" onClick={() => copyText(`<${title} width='24'/>`)}>
                {copied ? 'copied' : 'copy'}
              </Button>
            </div>
          ))}
        </Flex>
      </div>
    </DocsLayout>
  )
}

export default Icons
