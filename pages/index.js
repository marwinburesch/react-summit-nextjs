import Link from 'next/link'

export default () => {
  return (
    <>
      <p>Index Page</p>
      <Link href='/about'>
        <a>To /about</a>
      </Link>
    </>
  )
}
