import { useEffect } from 'react'
import { useScript } from '..'

// it's an example, use your types instead
// eslint-disable-next-line @typescript-eslint/no-explicit-any

export default function Component() {
  // Load the script asynchronously
  const dt = useScript(`https://code.jquery.com/jquery-3.5.1.min.js`, {
    removeOnUnmount: false,
  })

  useEffect(() => {
    if (typeof dt !== 'undefined') {
      // jQuery is loaded => print the version
      alert(dt.jquery)
    }
  }, [dt])

  return (
    <div>
      <p>{`Current status: ${dt}`}</p>

      {dt === 'ready' && <p>You can use the script here.</p>}
    </div>
  )
}
