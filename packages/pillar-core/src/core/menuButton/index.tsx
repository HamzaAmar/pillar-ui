// import { useRovingIndex } from '@pillar-ui/hooks'
// import React, { useState, useRef, useEffect } from 'react'
// import { Popover } from '../popover'

// interface MenuItem {
//   id: string | number
//   label: string
//   onClick: () => void
// }

// interface MenuButtonProps {
//   label: string
//   menuItems: MenuItem[]
// }

// export const MenuButton: React.FC<MenuButtonProps> = ({ label, menuItems }) => {
//   const [isOpen, setIsOpen] = useState<boolean>(false)
//   const buttonRef = useRef<HTMLButtonElement>(null)
//   const menuRef = useRef<HTMLUListElement>(null)
//   const { focusedIndex, handleIndexChange, handleKeyEvent } = useRovingIndex(menuItems.length)

//   const toggleMenu = (): void => setIsOpen(!isOpen)

//   const handleButtonKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
//     switch (event.key) {
//       case 'Enter':
//       case ' ':
//         event.preventDefault()
//         toggleMenu()
//         break
//       case 'ArrowDown':
//         event.preventDefault()
//         setIsOpen(true)
//         handleIndexChange(0)
//         break
//       case 'ArrowUp':
//         event.preventDefault()
//         setIsOpen(false)
//         break
//     }
//   }

//   const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLUListElement>): void => {
//     handleKeyEvent(event)
//     switch (event.key) {
//       case 'Escape':
//         setIsOpen(false)
//         buttonRef.current?.focus()
//         break
//       case 'Home':
//         event.preventDefault()
//         handleIndexChange(0)
//         break
//       case 'End':
//         event.preventDefault()
//         handleIndexChange(menuItems.length - 1)
//         break
//     }
//   }

//   useEffect(() => {
//     if (isOpen && menuRef.current) {
//       const focusableElements = menuRef.current.querySelectorAll<HTMLElement>('[tabindex="0"]')
//       focusableElements[focusedIndex]?.focus()
//     }
//   }, [isOpen, focusedIndex])

//   return (
//     <div className="menu-button-wrapper">
//       <button
//         ref={buttonRef}
//         aria-haspopup="true"
//         aria-expanded={isOpen}
//         onClick={toggleMenu}
//         onKeyDown={handleButtonKeyDown}
//         className="menu-button"
//       >
//         {label}
//       </button>
//       <Popover
//         triggerElement={buttonRef}
//         isOpen={isOpen}
//         onClose={() => setIsOpen(false)}
//         position="bottom"
//         align="start"
//       >
//         <ul ref={menuRef} role="menu" aria-label={`${label} menu`} onKeyDown={handleMenuKeyDown} className="menu-list">
//           {menuItems.map((item, index) => (
//             <li
//               key={item.id}
//               role="menuitem"
//               tabIndex={focusedIndex === index ? 0 : -1}
//               onClick={() => {
//                 item.onClick()
//                 setIsOpen(false)
//               }}
//               onFocus={() => handleIndexChange(index)}
//               className={`menu-item ${focusedIndex === index ? 'focused' : ''}`}
//             >
//               {item.label}
//             </li>
//           ))}
//         </ul>
//       </Popover>
//     </div>
//   )
// }

export const a = 0
