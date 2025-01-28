import { Tab, TabList, TabPanel, Tabs, Variant } from '@pillar-ui/core'
import { Album, Heart, Home } from '@pillar-ui/icons'

function TabBase({ variant }: { variant: Variant | 'border' | 'group' }) {
  return (
    <Tabs variant={variant}>
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

export const TabsVariant = () => {
  return (
    <>
      <TabBase variant="border" />
      <TabBase variant="group" />
      <TabBase variant="outline" />
      <TabBase variant="soft" />
      <TabBase variant="solid" />
    </>
  )
}
