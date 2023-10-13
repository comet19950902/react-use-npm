import { useIsomorphicLayoutEffect } from '..'

export function useDocumentTitle(title) {
  useIsomorphicLayoutEffect(() => {
    window.document.title = title
  }, [title])
}
