// import { Children, forwardRef, useId } from 'react'
// import { ForwardRefComponent } from '../../types/polymorphic.type'
// import type { TabsProps, TabListProps, TabPanelProps, TabsProviderProps, TabProps } from './tabs.type'
// import { Flex } from '../flex'
// import { createContext } from '@pillar-ui/utils'
// import { useRovingIndex } from '@pillar-ui/hooks'

// /*
// ===============================================================================================
//     Tab List Core Component
// ===============================================================================================
// */

// const [TabsProvider, useTabsContext] = createContext<TabsProviderProps>({ name: 'Tabs' })

// export const TabList = forwardRef(({ children, ...rest }, ref) => {
//   const { direction, handleKeySelect } = useTabsContext() ?? {}
//   const flexDirection = direction === 'horizontal' ? ({ direction: 'column' } as const) : {}
//   return (
//     <Flex
//       role="tablist"
//       {...flexDirection}
//       aria-orientation={direction}
//       gap="sm"
//       onKeyDown={handleKeySelect}
//       className="tabs--list"
//       ref={ref}
//       {...rest}
//     >
//       {children}
//     </Flex>
//   )
// }) as ForwardRefComponent<'div', TabListProps>
// TabList.displayName = 'Pillar-TabList'

// /*
// ===============================================================================================
//     Tab  Core Component
// ===============================================================================================
// */

// export const Tab = forwardRef(({ title, value, ...rest }, ref) => {
//   const context = useTabsContext()
//   const id = `${context?.id}-panel`

//   return (
//     <button
//       onClick={() => context?.handleSelect(value)}
//       type="button"
//       className={`tab tab__${context?.variant} u_rad-${context?.corner}`}
//       role="tab"
//       aria-selected={context?.selected === value}
//       aria-controls={id}
//       ref={ref}
//       {...rest}
//     >
//       {title}
//     </button>
//   )
// }) as ForwardRefComponent<'button', TabProps>
// Tab.displayName = 'Pillar-Tab'

// /*
// ===============================================================================================
//     Tab Panel Core Component
// ===============================================================================================
// */

// export const TabPanel = forwardRef((props, ref) => {
//   const { children, value, ...rest } = props
//   const context = useTabsContext()
//   const id = `${context?.id}-panel`
//   if (value !== context?.selected) return null
//   return (
//     <div id={id} role="tabpanel" ref={ref} {...rest}>
//       {children}
//     </div>
//   )
// }) as ForwardRefComponent<'div', TabPanelProps>
// TabPanel.displayName = 'Pillar-TabPanel'

// /*
// ===============================================================================================
//     Tab Panels Core Component
// ===============================================================================================
// */

// export const TabPanels = forwardRef((props, ref) => {
//   const { color = 'bg-12', children, ...rest } = props

//   return (
//     <div ref={ref} {...rest}>
//       {children}
//     </div>
//   )
// }) as ForwardRefComponent<'div', TabPanelProps>
// TabPanels.displayName = 'Pillar-TabPanels'

// /*
// ===============================================================================================
//     Tabs Core Component
// ===============================================================================================
// */

// export const Tabs = forwardRef(
//   (
//     {
//       children,
//       direction = 'vertical',
//       defaultValue,
//       size,
//       variant = 'bordered',
//       corner = 'sm',
//       color = 'pri',
//       ...rest
//     },
//     ref
//   ) => {
//     const id = useId()
//     const { focusedIndex, handleIndexChange, handleKeyEvent } = useRovingIndex(Children.count(children), {
//       loop: true,
//       defaultIndex: defaultValue,
//       direction: direction,
//     })
//     // const [selected, setSelected] = useState<string | undefined>(defaultValue)
//     // function handleSelect(value: string) {
//     //   setSelected(value)
//     // }
//     const context = {
//       direction,
//       selected: focusedIndex,
//       handleSelect: handleIndexChange,
//       handleKeySelect: handleKeyEvent,
//       variant,
//       corner,
//       id,
//     }

//     const flexDirection = direction === 'vertical' ? ({ direction: 'column' } as const) : {}

//     return (
//       <TabsProvider {...context}>
//         <Flex {...flexDirection} gap="sm" ref={ref} className={`u_${color} u_size-${size}`} {...rest}>
//           {children}
//         </Flex>
//       </TabsProvider>
//     )
//   }
// ) as ForwardRefComponent<'div', TabsProps>

// Tabs.displayName = 'Pillar-Paper'

// export type { TabsProps, TabListProps, TabPanelProps, TabsProviderProps, TabProps }

export const Tabs = () => {
  return 'hell'
}
