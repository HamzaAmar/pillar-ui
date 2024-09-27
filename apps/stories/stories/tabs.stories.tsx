import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Button, Flex, Heading, Tabs, Tab, TabList, TabPanel, TabPanels, Grid } from '@pillar-ui/core'
import type { TabProps } from '@pillar-ui/core'
import { ArrowDown } from '@pillar-ui/icons'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta<typeof Tabs>

export default meta

function TabBase(props) {
  return (
    <Tabs {...props}>
      <TabList>
        <Tab value={1} title="Hello World" icon={<ArrowDown width="20px" />} />
        <Tab value={2} title="Hello World" icon={<ArrowDown width="20px" />} />
        <Tab value={3} title="Hello World" icon={<ArrowDown width="20px" />} />
        <Tab value={4} title="Hello World" icon={<ArrowDown width="20px" />} />
        <Tab value={5} title="Hello World" icon={<ArrowDown width="20px" />} />
      </TabList>
      <TabPanels>
        <TabPanel value={1}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, consequuntur nesciunt iure, hic voluptates
          optio tenetur facere, odit sequi reprehenderit illum omnis excepturi veritatis neque perferendis repudiandae
          eos amet quisquam!
        </TabPanel>
        <TabPanel value={2}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis atque tempore molestias ducimus eligendi
          commodi deserunt nulla harum eius et voluptas aspernatur odio esse quo doloribus, suscipit perspiciatis nisi
          dignissimos.
        </TabPanel>

        <TabPanel value={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum ipsa nulla porro veritatis dolorem
          exercitationem minus. Veniam molestiae aperiam voluptatibus dolor quibusdam ratione temporibus magni sapiente?
          Sit, minus tempora?
        </TabPanel>

        <TabPanel value={4}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga maiores doloremque ut quam dicta
          rerum veritatis, architecto dignissimos aliquam sapiente recusandae quod voluptatum odio ipsam quas fugit
          numquam debitis? Qui unde ex optio illum vitae vero assumenda? Commodi animi ipsa alias, facere ratione
          reprehenderit labore aut ut atque ipsum possimus maxime pariatur nihil quae laborum repudiandae debitis minima
          cupiditate? Sit numquam expedita necessitatibus aliquid explicabo commodi. Autem itaque animi accusamus dolor
          totam beatae quo repellendus porro, neque, tempore sit aliquid soluta nostrum vel enim aperiam earum
          necessitatibus reprehenderit distinctio?
        </TabPanel>
        <TabPanel value={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque numquam perspiciatis sit veritatis
          quidem provident dolorem deserunt, eaque animi excepturi, voluptas harum at fuga voluptatibus magni amet est
          hic! Possimus labore doloremque eaque blanditiis sequi modi autem, sunt iure maxime aperiam iusto facilis
          odio, qui ipsum aliquid? Nostrum ullam dolores in error nesciunt id aspernatur laborum magni libero quod?
          Commodi in, nulla veritatis aspernatur quam soluta illum quasi. Corporis obcaecati tenetur ex praesentium
          commodi, dolorum vero placeat suscipit aliquid omnis, ipsa non accu
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export const TabSize = () => {
  return (
    <Flex direction="column" gap="4">
      <TabBase gap="2" defaultValue={1} />
      <TabBase size="4" defaultValue={1} />
      <TabBase gap="5" defaultValue={1} />
      <TabBase gap="6" defaultValue={1} />
      <TabBase gap="7" defaultValue={1} />
      <TabBase gap="8" defaultValue={1} />
    </Flex>
  )
}

export const TabColor = () => {
  return (
    <Flex direction="column" gap="4">
      <TabBase color="d" defaultValue={1} />
      <TabBase color="w" defaultValue={1} />
      <TabBase color="s" defaultValue={1} />
      <TabBase color="p" defaultValue={1} />
      <TabBase color="se" defaultValue={1} />
      <TabBase color="b" defaultValue={1} />
    </Flex>
  )
}

export const TabDirection = () => {
  return (
    <Flex direction="column" gap="4">
      <TabBase direction="vertical" defaultValue={1} />
      <TabBase direction="horizontal" defaultValue={1} />
    </Flex>
  )
}

export const TabVariants = () => {
  return (
    <Grid grid="1fr 1fr" gap="4">
      <Flex direction="column" gap="4">
        <TabBase variant="solid" color="d" defaultValue={1} />
        <TabBase variant="solid" color="w" defaultValue={1} />
        <TabBase variant="solid" color="s" defaultValue={1} />
        <TabBase variant="solid" color="p" defaultValue={1} />
        <TabBase variant="solid" color="se" defaultValue={1} />
        <TabBase variant="solid" color="b" defaultValue={1} />
      </Flex>
      <Flex direction="column" gap="4">
        <TabBase variant="outline" color="d" defaultValue={1} />
        <TabBase variant="outline" color="w" defaultValue={1} />
        <TabBase variant="outline" color="s" defaultValue={1} />
        <TabBase variant="outline" color="p" defaultValue={1} />
        <TabBase variant="outline" color="se" defaultValue={1} />
        <TabBase variant="outline" color="b" defaultValue={1} />
      </Flex>
      <Flex direction="column" gap="4">
        <TabBase variant="soft" color="d" defaultValue={1} />
        <TabBase variant="soft" color="w" defaultValue={1} />
        <TabBase variant="soft" color="s" defaultValue={1} />
        <TabBase variant="soft" color="p" defaultValue={1} />
        <TabBase variant="soft" color="se" defaultValue={1} />
        <TabBase variant="soft" color="b" defaultValue={1} />
      </Flex>
      <Flex direction="column" gap="4">
        <TabBase color="d" defaultValue={1} />
        <TabBase color="w" defaultValue={1} />
        <TabBase color="s" defaultValue={1} />
        <TabBase color="p" defaultValue={1} />
        <TabBase color="se" defaultValue={1} />
        <TabBase color="b" defaultValue={1} />
      </Flex>
    </Grid>
  )
}
