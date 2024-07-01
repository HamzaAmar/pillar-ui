import { forwardRef, useEffect, useId, useRef, useState } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { TooltipContentProps, TooltipContext, TooltipProps } from './tooltip.type'
import { createContext } from '@pillar-ui/utils'
import { useComposedRefs } from '@pillar-ui/hooks'
import { Popover } from '../popover'

/*
//////////////////////////////////////////////////////////////////////////////////////////////////
  Tooltip Root Section
//////////////////////////////////////////////////////////////////////////////////////////////////
*/

const [TooltipProvider, useTooltipContext] = createContext<TooltipContext>({
  name: 'TooltipRoot',
  isContextRequired: true,
})

export const Tooltip = forwardRef(({ children, as: Tag = 'div', delay = 200, size = 'sm', ...rest }, forwardedRef) => {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const id = useId()

  function handleToggle() {
    setOpen(!open)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleOpen() {
    setOpen(true)
  }

  const context = { open, setOpen, handleOpen, handleClose, handleToggle, triggerRef, id, delay, size }
  return (
    <TooltipProvider {...context}>
      <div role="tooltip" ref={forwardedRef} {...rest}>
        {children}
      </div>
    </TooltipProvider>
  )
}) as ForwardRefComponent<'div', TooltipProps>

Tooltip.displayName = 'TooltipRoot'

/*
//////////////////////////////////////////////////////////////////////////////////////////////////
  Tooltip Trigger Section
//////////////////////////////////////////////////////////////////////////////////////////////////
*/

type TooltipType = ForwardRefComponent<'button', TooltipProps>

export const TooltipTrigger = forwardRef(({ children, as: Tag = 'button', ...rest }, forwardedRef) => {
  const ctx = useTooltipContext()
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

  // Hello can you please Help me cast the ctx!.triggerRef to be as the as type please
  const ref = useComposedRefs(forwardedRef, ctx!.triggerRef)

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [timer])

  const showTooltip = () => {
    if (timer) {
      clearTimeout(timer)
    }

    const timeoutId = setTimeout(() => {
      ctx!.handleOpen()
    }, ctx!.delay)
    setTimer(timeoutId)
  }

  const hideTooltip = () => {
    if (timer) {
      clearTimeout(timer)
    }
    ctx!.handleClose()
  }

  return (
    <Tag
      onFocus={showTooltip}
      onBlur={hideTooltip}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      aria-describedby={ctx!.id}
      type="button"
      ref={ref}
      {...rest}
    >
      {children}
    </Tag>
  )
}) as TooltipType

TooltipTrigger.displayName = 'TooltipTrigger'

/*
//////////////////////////////////////////////////////////////////////////////////////////////////
  Tooltip Content Section
//////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const TooltipContent = forwardRef(({ children, as: Tag = 'div', ...rest }, forwardedRef) => {
  const { open, handleClose, id, triggerRef, size } = useTooltipContext() ?? {}

  return (
    <Popover
      isOpen={open!}
      onClose={handleClose!}
      triggerElement={triggerRef!}
      ref={forwardedRef}
      id={id}
      width="auto"
      role="tooltip"
      {...rest}
      position="top"
      align="start"
      size={size}
    >
      {children}
    </Popover>
  )
}) as ForwardRefComponent<'div', TooltipContentProps>

TooltipContent.displayName = 'TooltipContent'

export type { Align, TooltipContentProps, TooltipProps } from './tooltip.type'
