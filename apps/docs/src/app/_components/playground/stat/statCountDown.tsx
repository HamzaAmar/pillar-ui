'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { Flex, Paper, Text, Button, Chips } from '@pillar-ui/core'
import { PlayerPause, PlayerPlay, Repeat } from '@pillar-ui/icons'

const useCountdown = (initialTime: number = 100) => {
  initialTime = Math.max(0, initialTime)
  const [time, setTime] = useState(initialTime)
  const [isActive, setIsActive] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const clearCurrentInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const startCountdown = useCallback(() => {
    clearCurrentInterval()
    setIsActive(true)

    intervalRef.current = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearCurrentInterval()
          setIsActive(false)
          return 0
        }
        return time - 1
      })
    }, 1000)
  }, [])

  const pause = useCallback(() => {
    clearCurrentInterval()
    setIsActive(false)
  }, [])

  const reset = useCallback(() => {
    setTime(initialTime)
    startCountdown()
  }, [initialTime, startCountdown])

  const play = useCallback(() => {
    if (time === 0) {
      reset()
    } else {
      startCountdown()
    }
  }, [time, reset, startCountdown])

  useEffect(() => {
    startCountdown()
    return clearCurrentInterval
  }, [startCountdown])

  return {
    time,
    isActive,
    play,
    pause,
    reset,
  }
}

interface StatCountDownProps {
  initialTime?: number
  className?: string
}

function formatTimeMessage(time: number) {
  if (time === 0) return 'Time is up'
  return `${time} second${time > 1 ? 's' : ''}`
}
interface StatCountDownProps {
  initialTime?: number
}

export const StatCountDown = () => {
  const { time, isActive, play, pause, reset } = useCountdown()

  return (
    <Paper flow="6" p="4" width="fit-content">
      <Paper>
        <Text size="3" color="b" low>
          Countdown to time up 🎉
        </Text>
        <Flex gap="4" items="center">
          <Text transform="uppercase" weight="6" size="9" leading="2">
            {formatTimeMessage(time)}
          </Text>
          <Chips variant={isActive ? 'mixed' : 'shadow'} color={isActive ? 'd' : 'su'}>
            {isActive ? 'Played' : 'Paused'}
          </Chips>
        </Flex>
      </Paper>
      <Flex gap="3">
        <Button size="4" icon={isActive ? <PlayerPause /> : <PlayerPlay />} onClick={isActive ? pause : play}>
          {isActive ? 'Pause' : 'Play'}
        </Button>
        <Button icon={<Repeat />} size="4" variant="soft" onClick={reset}>
          Reset
        </Button>
      </Flex>
    </Paper>
  )
}
