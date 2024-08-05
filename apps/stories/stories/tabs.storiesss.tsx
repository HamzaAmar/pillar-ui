// import React from 'react'
// import { Meta, StoryFn } from '@storybook/react'
// import { Button, Flex, Heading, Tabs, Grid } from '@pillar-ui/core'
// import type { TabProps } from '@pillar-ui/core'
// import { ArrowDown } from '@pillar-ui/icons'

// const meta: Meta<typeof Chips> = {
//   title: 'Components/Tabs',
//   component: Tabs,
// } as Meta<typeof Tabs>

// export default meta

// function TabBase(props) {
//   return (
//     <Tabs {...props}>
//       <Tabs.List>
//         <Tabs.Tab value={1} title="Hello World" icon={<ArrowDown width="20px" />} />
//         <Tabs.Tab value={2} title="Hello World" icon={<ArrowDown width="20px" />} />
//         <Tabs.Tab value={3} title="Hello World" icon={<ArrowDown width="20px" />} />
//         <Tabs.Tab value={4} title="Hello World" icon={<ArrowDown width="20px" />} />
//         <Tabs.Tab value={5} title="Hello World" icon={<ArrowDown width="20px" />} />
//       </Tabs.List>
//       <Tabs.Panels>
//         <Tabs.Panel value={1}>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, consequuntur nesciunt iure, hic voluptates
//           optio tenetur facere, odit sequi reprehenderit illum omnis excepturi veritatis neque perferendis repudiandae
//           eos amet quisquam!
//         </Tabs.Panel>
//         <Tabs.Panel value={2}>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis atque tempore molestias ducimus eligendi
//           commodi deserunt nulla harum eius et voluptas aspernatur odio esse quo doloribus, suscipit perspiciatis nisi
//           dignissimos.
//         </Tabs.Panel>

//         <Tabs.Panel value={3}>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum ipsa nulla porro veritatis dolorem
//           exercitationem minus. Veniam molestiae aperiam voluptatibus dolor quibusdam ratione temporibus magni sapiente?
//           Sit, minus tempora?
//         </Tabs.Panel>

//         <Tabs.Panel value={4}>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga maiores doloremque ut quam dicta
//           rerum veritatis, architecto dignissimos aliquam sapiente recusandae quod voluptatum odio ipsam quas fugit
//           numquam debitis? Qui unde ex optio illum vitae vero assumenda? Commodi animi ipsa alias, facere ratione
//           reprehenderit labore aut ut atque ipsum possimus maxime pariatur nihil quae laborum repudiandae debitis minima
//           cupiditate? Sit numquam expedita necessitatibus aliquid explicabo commodi. Autem itaque animi accusamus dolor
//           totam beatae quo repellendus porro, neque, tempore sit aliquid soluta nostrum vel enim aperiam earum
//           necessitatibus reprehenderit distinctio?
//         </Tabs.Panel>
//         <Tabs.Panel value={5}>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque numquam perspiciatis sit veritatis
//           quidem provident dolorem deserunt, eaque animi excepturi, voluptas harum at fuga voluptatibus magni amet est
//           hic! Possimus labore doloremque eaque blanditiis sequi modi autem, sunt iure maxime aperiam iusto facilis
//           odio, qui ipsum aliquid? Nostrum ullam dolores in error nesciunt id aspernatur laborum magni libero quod?
//           Commodi in, nulla veritatis aspernatur quam soluta illum quasi. Corporis obcaecati tenetur ex praesentium
//           commodi, dolorum vero placeat suscipit aliquid omnis, ipsa non accu
//         </Tabs.Panel>
//       </Tabs.Panels>
//     </Tabs>
//   )
// }

// export const TabSize = () => {
//   return (
//     <Flex direction="column" gap="sm">
//       <TabBase size="2xs" defaultValue={1} />
//       <TabBase size="sm" defaultValue={1} />
//       <TabBase size="md" defaultValue={1} />
//       <TabBase size="lg" defaultValue={1} />
//       <TabBase size="xl" defaultValue={1} />
//       <TabBase size="2xl" defaultValue={1} />
//     </Flex>
//   )
// }

// export const TabColor = () => {
//   return (
//     <Flex direction="column" gap="sm">
//       <TabBase color="dan" defaultValue={1} />
//       <TabBase color="war" defaultValue={1} />
//       <TabBase color="suc" defaultValue={1} />
//       <TabBase color="pri" defaultValue={1} />
//       <TabBase color="sec" defaultValue={1} />
//       <TabBase color="bg" defaultValue={1} />
//     </Flex>
//   )
// }

// export const TabDirection = () => {
//   return (
//     <Flex direction="column" gap="sm">
//       <TabBase direction="vertical" defaultValue={1} />
//       <TabBase direction="horizontal" defaultValue={1} />
//     </Flex>
//   )
// }

// export const TabVariants = () => {
//   return (
//     <Grid grid="1fr 1fr" gap="sm">
//       <Flex direction="column" gap="sm">
//         <TabBase variant="solid" color="dan" defaultValue={1} />
//         <TabBase variant="solid" color="war" defaultValue={1} />
//         <TabBase variant="solid" color="suc" defaultValue={1} />
//         <TabBase variant="solid" color="pri" defaultValue={1} />
//         <TabBase variant="solid" color="sec" defaultValue={1} />
//         <TabBase variant="solid" color="bg" defaultValue={1} />
//       </Flex>
//       <Flex direction="column" gap="sm">
//         <TabBase variant="outline" color="dan" defaultValue={1} />
//         <TabBase variant="outline" color="war" defaultValue={1} />
//         <TabBase variant="outline" color="suc" defaultValue={1} />
//         <TabBase variant="outline" color="pri" defaultValue={1} />
//         <TabBase variant="outline" color="sec" defaultValue={1} />
//         <TabBase variant="outline" color="bg" defaultValue={1} />
//       </Flex>
//       <Flex direction="column" gap="sm">
//         <TabBase variant="soft" color="dan" defaultValue={1} />
//         <TabBase variant="soft" color="war" defaultValue={1} />
//         <TabBase variant="soft" color="suc" defaultValue={1} />
//         <TabBase variant="soft" color="pri" defaultValue={1} />
//         <TabBase variant="soft" color="sec" defaultValue={1} />
//         <TabBase variant="soft" color="bg" defaultValue={1} />
//       </Flex>
//       <Flex direction="column" gap="sm">
//         <TabBase color="dan" defaultValue={1} />
//         <TabBase color="war" defaultValue={1} />
//         <TabBase color="suc" defaultValue={1} />
//         <TabBase color="pri" defaultValue={1} />
//         <TabBase color="sec" defaultValue={1} />
//         <TabBase color="bg" defaultValue={1} />
//       </Flex>
//     </Grid>
//   )
// }

export const a = 1
