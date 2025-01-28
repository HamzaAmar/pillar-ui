import { Size, Tab, TabList, TabPanel, Tabs } from '@pillar-ui/core'
import { Album, Heart, Home } from '@pillar-ui/icons'

function TabBase({ size }: { size: Size }) {
  return (
    <Tabs size={size}>
      <TabList>
        <Tab value={1} title="Home" icon={<Home />} />
        <Tab value={2} title="Gallery" icon={<Album />} />
        <Tab value={3} title="Favorites" icon={<Heart />} />
      </TabList>
      <TabPanel value={1}>Home.</TabPanel>
      <TabPanel value={2}>Gallery.</TabPanel>
      <TabPanel value={3}>Favorites.</TabPanel>
    </Tabs>
  )
}

export const TabsSize = () => {
  return (
    <>
      <TabBase size="1" />
      <TabBase size="2" />
      <TabBase size="4" />
      <TabBase size="5" />
      <TabBase size="6" />
      <TabBase size="7" />
      <TabBase size="8" />
      <TabBase size="9" />
    </>
  )
}
