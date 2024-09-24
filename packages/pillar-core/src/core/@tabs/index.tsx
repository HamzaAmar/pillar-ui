import { forwardRef, useId, useState } from 'react'
import { cx } from '../cx'
import { context } from '../@provider'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { TabsProps, TabListProps, TabPanelProps, TabsProviderProps, TabProps, TabPanelsProps } from './tabs.type'
/*
===============================================================================================
    Tab List Core Component
===============================================================================================
*/

const [TabsProvider, useTabsContext] = context<TabsProviderProps>({ name: 'Tabs' })

export const TabList = forwardRef(({ children, ...rest }, ref) => {
  const { direction } = useTabsContext() ?? {}
  return (
    <div
      role="tablist"
      aria-orientation={direction}
      className={cx('t_ab_lst f-l u_gap-xs', { ['l_fl-column']: direction !== 'vertical' })}
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
      className={`t_ab t_ab-${variant} u_rad-${corner}`}
      role="tab"
      aria-selected={selected === value}
      aria-controls={`${id}-panel`}
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
    <div id={`${id}-panel`} role="tabpanel" ref={ref} {...rest}>
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
  const { color = 'bg-12', children, ...rest } = props

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
      direction = 'vertical',
      defaultValue = 0,
      size,
      variant = 'bordered',
      corner = 'sm',
      color = 'pri',
      ...rest
    },
    ref
  ) => {
    const id = useId()
    // const { focusedIndex, handleIndexChange, handleKeyEvent } = useRovingIndex(Children.count(children), {
    //   loop: true,
    //   defaultIndex: defaultValue,
    //   direction: direction,
    // })
    const [selected, setSelected] = useState<number>(defaultValue)
    function handleSelect(value: number) {
      setSelected(value)
    }
    const context = {
      direction,
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
          className={cx(`f-l u_gap-sm u_${color} u_f-${size}`, { ['l_fl-column']: direction === 'vertical' })}
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
