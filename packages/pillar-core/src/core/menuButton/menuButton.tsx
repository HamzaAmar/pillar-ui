import React, { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import type { MenuItem, MenuSelectProps } from './menuButton.type'

export const MenuSelect = ({
  items,
  onChange,
  label,
  loop = false,
  disabled = false,
  instructions,
}: MenuSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([])

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  const handleItemClick = (value: string) => {
    setIsOpen(false)
    setSelectedItem(items.find((item) => item.value === value) || null)
    onChange?.(value)
    buttonRef.current?.focus()
  }

  const handleMenuItemKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleItemClick(items[index].value)
    }
  }

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === ' ' || event.key === 'Enter') {
      event.preventDefault()
      setIsOpen(true)
      setFocusedIndex(null)
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
      buttonRef.current?.focus()
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (focusedIndex === null) {
        setFocusedIndex(0)
      } else {
        setFocusedIndex((prevIndex) => {
          const nextIndex = prevIndex === null ? 0 : prevIndex + 1
          return loop ? (nextIndex + items.length) % items.length : Math.min(nextIndex, items.length - 1)
        })
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (focusedIndex === null) {
        setFocusedIndex(items.length - 1)
      } else {
        setFocusedIndex((prevIndex) => {
          const nextIndex = prevIndex === null ? items.length - 1 : prevIndex - 1
          return loop ? (nextIndex + items.length) % items.length : Math.max(nextIndex, 0)
        })
      }
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (focusedIndex !== null) {
        handleItemClick(items[focusedIndex].value)
      }
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick)
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
    return
  }, [isOpen])

  useEffect(() => {
    if (isOpen && focusedIndex !== null && menuItemsRef.current[focusedIndex]) {
      menuItemsRef.current[focusedIndex]?.focus()
    }
  }, [focusedIndex, isOpen])

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
    setFocusedIndex(null)
  }

  const getMenuPositionStyle = () => {
    console.log(
      'this is the value of menuRef , buttonRef from the getMenu Position',
      menuRef.current,
      buttonRef.current
    )
    if (!menuRef.current || !buttonRef.current) return {}
    const buttonRect = buttonRef.current.getBoundingClientRect()
    const bottomSpace = window.innerHeight - buttonRect.bottom
    const topSpace = buttonRect.top
    const menuHeight = menuRef.current.offsetHeight
    const spaceToBottom = bottomSpace - menuHeight
    const spaceToTop = topSpace - menuHeight
    if (spaceToBottom < 0 && spaceToTop > spaceToBottom) {
      return { bottom: '100%', top: 'auto' }
    }
    return { top: '100%', bottom: 'auto' }
  }

  return (
    <>
      <button
        className="menu-select-button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={toggleMenu}
        onKeyDown={handleTriggerKeyDown}
        ref={buttonRef}
        disabled={disabled}
        aria-disabled={disabled}
        aria-describedby="menu-instructions"
      >
        {selectedItem ? selectedItem.label : label}
      </button>
      {isOpen &&
        ReactDOM.createPortal(
          <div className="menu" role="menu" ref={menuRef} style={{ ...getMenuPositionStyle() }}>
            {instructions && <div id="menu-instructions">{instructions}</div>}
            {items.map((item, index) => (
              <div
                key={item.value}
                className={`menu-item ${index === focusedIndex ? 'focused' : ''}`}
                role="menuitem"
                tabIndex={index === focusedIndex ? 1 : -1}
                onClick={() => handleItemClick(item.value)}
                onKeyDown={(event) => handleMenuItemKeyDown(event, index)}
                ref={(element) => (menuItemsRef.current[index] = element)}
              >
                {item.label}
              </div>
            ))}
          </div>,
          document.body
        )}
    </>
  )
}

export default MenuSelect
