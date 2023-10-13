import { useEventListener } from '..'

export function useClickAnyWhere(handler) {
  useEventListener('click', event => {
    handler(event)
  })
}
