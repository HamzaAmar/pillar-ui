import { Tab, TabList, TabPanel, Tabs, Corner } from '@pillar-ui/core'
import { Album, Heart, Home } from '@pillar-ui/icons'

function TabBase({ corner }: { corner: Corner }) {
  return (
    <Tabs variant="group">
      <TabList corner={corner}>
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

export const TabsCorner = () => {
  return (
    <>
      <TabBase corner="0" />
      <TabBase corner="1" />
      <TabBase corner="2" />
      <TabBase corner="3" />
      <TabBase corner="4" />
      <TabBase corner="5" />
      <TabBase corner="full" />
    </>
  )
}
