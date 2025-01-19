'use client'
import { forwardRef, useId, useState } from 'react'
import { cx } from '../cx'
import { context } from '../provider'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { TabsProps, TabListProps, TabPanelProps, TabsProviderProps, TabProps, TabPanelsProps } from './tabs.type'
/*
===============================================================================================
    Tab List Core Component
===============================================================================================
*/

const [TabsProvider, useTabsContext] = context<TabsProviderProps>({ name: 'Tabs' })

export const TabList = forwardRef(({ children, ...rest }, ref) => {
  const { orientation } = useTabsContext() ?? {}
  return (
    <div
      role="tablist"
      aria-orientation={orientation}
      className={cx('tab-L fl- Sg-3', { ['fl-col']: orientation !== 'vertical' })}
      ref={ref}
      {...rest}
    >
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

export const Tab = forwardRef(({ title, value, ...rest }, ref) => {
  const { id, handleSelect, selected, variant, corner } = useTabsContext() ?? {}

  return (
    <button
      onClick={() => handleSelect?.(value)}
      type="button"
      className={`tab- tab-${variant} R-${corner}`}
      role="tab"
      aria-selected={selected === value}
      aria-controls={`${id}-p`}
      ref={ref}
      {...rest}
    >
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
    Tab Panels Core Component
===============================================================================================
*/

export const TabPanels = forwardRef((props, ref) => {
  const { color = 'b-12', children, ...rest } = props

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  )
}) as ForwardRefComponent<'div', TabPanelsProps>
TabPanels.displayName = 'TabPanels'

/*
===============================================================================================
    Tabs Core Component
===============================================================================================
*/

export const Tabs = forwardRef(
  (
    {
      children,
      orientation = 'vertical',
      defaultValue = 0,
      size,
      variant = 'bordered',
      corner = '2',
      color = 'p',
      ...rest
    },
    ref
  ) => {
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
      corner,
      id,
    }

    return (
      <TabsProvider {...context}>
        <div
          ref={ref}
          className={cx(`fl- Sg-4 C-${color} Fs-${size}`, { ['fl-col']: orientation === 'vertical' })}
          {...rest}
        >
          {children}
        </div>
      </TabsProvider>
    )
  }
) as ForwardRefComponent<'div', TabsProps>

Tabs.displayName = 'Paper'

export type { TabsProps, TabListProps, TabPanelProps, TabsProviderProps, TabProps }
