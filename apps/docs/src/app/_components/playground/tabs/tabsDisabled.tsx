import { Tab, TabList, TabPanel, Tabs } from '@pillar-ui/core'
import { Album, Heart, Home } from '@pillar-ui/icons'

export const TabsDisabled = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab value={1} title="Home" icon={<Home />} />
          <Tab disabled value={2} title="Gallery" icon={<Album />} />
          <Tab value={3} title="Favorites" icon={<Heart />} />
        </TabList>
        <TabPanel value={1}>Home.</TabPanel>
        <TabPanel value={2}>Gallery.</TabPanel>
        <TabPanel value={3}>Favorite.</TabPanel>
      </Tabs>
    </>
  )
}
