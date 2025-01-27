'use client'
import { forwardRef, useId, useState } from 'react'
import { context } from '../provider'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { TabsProps, TabListProps, TabPanelProps, TabsProviderProps, TabProps } from './tabs.type'
/*
===============================================================================================
    Tab List Core Component
===============================================================================================
*/

const [TabsProvider, useTabsContext] = context<TabsProviderProps>({ name: 'Tabs' })

export const TabList = forwardRef(({ children, corner = '2', ...rest }, ref) => {
  const { orientation } = useTabsContext() ?? {}
  return (
    <div role="tablist" aria-orientation={orientation} className={`tab-L R-${corner}`} ref={ref} {...rest}>
      {children}
    </div>
  )
}) as ForwardRefComponent<'div', TabListProps>
TabList.displayName = 'TabList'

/*
===============================================================================================
    Tab  Core Component
===============================================================================================
*/

export const Tab = forwardRef(({ title, value, icon, ...rest }, ref) => {
  const { id, handleSelect, selected, variant } = useTabsContext() ?? {}

  return (
    <button
      onClick={() => handleSelect?.(value)}
      type="button"
      className={`tab- tab-${variant} F-c`}
      role="tab"
      aria-selected={selected === value}
      aria-controls={`${id}-p`}
      ref={ref}
      {...rest}
    >
      {icon}
      {title}
    </button>
  )
}) as ForwardRefComponent<'button', TabProps>
Tab.displayName = 'Tab'

/*
===============================================================================================
    Tab Panel Core Component
===============================================================================================
*/

export const TabPanel = forwardRef((props, ref) => {
  const { children, value, ...rest } = props
  const { id, selected } = useTabsContext() ?? {}
  if (value !== selected) return
  return (
    <div id={`${id}-p`} role="tabpanel" ref={ref} {...rest}>
      {children}
    </div>
  )
}) as ForwardRefComponent<'div', TabPanelProps>
TabPanel.displayName = 'TabPanel'

/*
===============================================================================================
    Tabs Core Component
===============================================================================================
*/

export const Tabs = forwardRef(
  ({ children, orientation = 'vertical', defaultValue = 1, size, variant = 'border', color = 'p', ...rest }, ref) => {
    const id = useId()
    // const { focusedIndex, handleIndexChange, handleKeyEvent } = useRovingIndex(Children.count(children), {
    //   loop: true,
    //   defaultIndex: defaultValue,
    //   orientation: orientation,
    // })
    const [selected, setSelected] = useState<number>(defaultValue)
    function handleSelect(value: number) {
      setSelected(value)
    }
    const context = {
      orientation,
      selected,
      handleSelect,
      // handleKeySelect: handleKeyEvent,
      variant,
      id,
    }

    return (
      <TabsProvider {...context}>
        <div ref={ref} className={`tabs- C-${color} Fs-${size}`} {...rest}>
          {children}
        </div>
      </TabsProvider>
    )
  }
) as ForwardRefComponent<'div', TabsProps>

Tabs.displayName = 'Paper'

export type { TabsProps, TabListProps, TabPanelProps, TabsProviderProps, TabProps }
