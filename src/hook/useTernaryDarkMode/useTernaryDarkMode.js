import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useLocalStorage, useMediaQuery, useUpdateEffect } from '..'

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'

export function useTernaryDarkMode() {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY)
  const [ternaryDarkMode, setTernaryDarkMode] = useLocalStorage('usehooks-ts-ternary-dark-mode', 'system')
  const [isDarkMode, setDarkMode] = useState(isDarkOS)

  // Update darkMode if os prefers changes
  useUpdateEffect(() => {
    if (ternaryDarkMode === 'system') {
      setDarkMode(isDarkOS)
    }
  }, [isDarkOS])

  useEffect(() => {
    switch (ternaryDarkMode) {
      case 'light':
        setDarkMode(false)
        break
      case 'system':
        setDarkMode(isDarkOS)
        break
      case 'dark':
        setDarkMode(true)
        break
      default:
        setDarkMode(false)
    }
  }, [ternaryDarkMode, isDarkOS])

  function toggleTernaryDarkMode() {
    const toggleDict = {
      light: 'system',
      system: 'dark',
      dark: 'light',
    }
    setTernaryDarkMode(prevMode => toggleDict[prevMode])
  }

  return {
    isDarkMode,
    ternaryDarkMode,
    setTernaryDarkMode,
    toggleTernaryDarkMode,
  }
}
