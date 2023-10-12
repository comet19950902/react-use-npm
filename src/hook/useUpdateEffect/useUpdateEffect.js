import { DependencyList, EffectCallback, useEffect } from 'react'
import { useIsFirstRender } from '..'

export function useUpdateEffect(effect, deps) {
  const isFirst = useIsFirstRender()

  useEffect(() => {
    if (!isFirst) {
      return effect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
