import { useCallback } from 'react'
import { useBoolean, useCounter, useInterval } from '..'

export function useCountdown(countdownOption) {
  let isDeprecated = false
  let countStart, intervalMs, isIncrement, countStop

  if ('seconds' in countdownOption) {
    console.warn(
      '[useCountdown:DEPRECATED] new interface is already available (see https://usehooks-ts.com/react-hook/use-countdown), the old version will retire on usehooks-ts@3.',
    )

    isDeprecated = true
    countStart = countdownOption.seconds
    intervalMs = countdownOption.interval
    isIncrement = countdownOption.isIncrement
  } else {
    ; ({ countStart, intervalMs, isIncrement, countStop } = countdownOption)
  }

  // default values
  intervalMs = intervalMs ?? 1000
  isIncrement = isIncrement ?? false
  countStop = countStop ?? 0

  const {
    count,
    increment,
    decrement,
    reset: resetCounter,
  } = useCounter(countStart)

  const {
    value: isCountdownRunning,
    setTrue: startCountdown,
    setFalse: stopCountdown,
  } = useBoolean(false)

  const resetCountdown = () => {
    stopCountdown()
    resetCounter()
  }

  const countdownCallback = useCallback(() => {
    if (count === countStop) {
      stopCountdown()
      return
    }

    if (isIncrement) {
      increment()
    } else {
      decrement()
    }
  }, [count, countStop, decrement, increment, isIncrement, stopCountdown])

  useInterval(countdownCallback, isCountdownRunning ? intervalMs : null)

  return isDeprecated
    ? [
      count,
      {
        start: startCountdown,
        stop: stopCountdown,
        reset: resetCountdown,
      }
    ]
    : [
      count,
      {
        startCountdown,
        stopCountdown,
        resetCountdown,
      }
    ]
}
