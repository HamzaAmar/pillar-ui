import { Color, Tab, TabList, TabPanel, Tabs } from '@pillar-ui/core'
import { Album, Heart, Home } from '@pillar-ui/icons'

function TabBase({ color }: { color: Color }) {
  return (
    <Tabs color={color}>
      <TabList>
        <Tab value={1} title="Home" icon={<Home />} />
        <Tab value={2} title="Gallery" icon={<Album />} />
        <Tab value={3} title="Favorites" icon={<Heart />} />
      </TabList>
      <TabPanel value={1}>Home.</TabPanel>
      <TabPanel value={2}>Gallery.</TabPanel>
      <TabPanel value={3}>Favorite.</TabPanel>
    </Tabs>
  )
}

export const TabsColor = () => {
  return (
    <>
      <TabBase color="b" />
      <TabBase color="d" />
      <TabBase color="i" />
      <TabBase color="p" />
      <TabBase color="se" />
      <TabBase color="su" />
      <TabBase color="w" />
    </>
  )
}
