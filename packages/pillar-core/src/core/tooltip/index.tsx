import { forwardRef, useEffect, useId, useRef, useState } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { TooltipContentProps, TooltipContext, TooltipProps } from './tooltip.type'
import { context } from '../utils'
import { useBooleanState, useComposedRefs } from '@pillar-ui/hooks'
import { Popover } from '../popover'

/*
//////////////////////////////////////////////////////////////////////////////////////////////////
  Tooltip Root Section
//////////////////////////////////////////////////////////////////////////////////////////////////
*/

const [TooltipProvider, useTooltipContext] = context<TooltipContext>({
  name: 'TooltipRoot',
  required: true,
})

export const Tooltip = forwardRef(({ children, as: Tag = 'div', delay = 200, size = 'sm', ...rest }, forwardedRef) => {
  const { value, setFalse, setTrue, toggle, setValue } = useBooleanState()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const id = useId()

  const context = {
    open: value,
    setOpen: setValue,
    handleOpen: setTrue,
    handleClose: setFalse,
    handleToggle: toggle,
    triggerRef,
    id,
    delay,
    size,
  }
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
  const { triggerRef, handleOpen = () => {}, delay, handleClose, id } = useTooltipContext() ?? {}
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

  // Hello can you please Help me cast the ctx!.triggerRef to be as the as type please
  const ref = useComposedRefs(forwardedRef, triggerRef)

  useEffect(
    () => () => {
      timer && clearTimeout(timer)
    },
    [timer]
  )

  const handleTooltip = (action: 'open' | 'close') => () => {
    timer && clearTimeout(timer)
    if (action === 'open') {
      const timeoutId = setTimeout(handleOpen, delay)
      setTimer(timeoutId)
    } else {
      handleClose?.()
    }
  }

  return (
    <Tag
      onFocus={handleTooltip('open')}
      onBlur={handleTooltip('close')}
      onMouseEnter={handleTooltip('open')}
      onMouseLeave={handleTooltip('close')}
      aria-describedby={id}
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

export const TooltipContent = forwardRef(({ children, as: Tag = 'div', ...rest }) => {
  const { open, handleClose, id, triggerRef, size } = useTooltipContext() ?? {}

  return (
    <Popover
      isOpen={open!}
      onClose={handleClose!}
      triggerElement={triggerRef!}
      // ref={forwardedRef}
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
