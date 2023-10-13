import { useFetch } from '..'

const url = `http://jsonplaceholder.typicode.com/posts`

export default function Component() {
  const { data, error } = useFetch(url)

  if (error) return <p>There is an error.</p>
  if (!data) return <p>Loading...</p>
  return <p>{data[0].title}</p>
}
