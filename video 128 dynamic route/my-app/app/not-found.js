import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="container text-center align-baseline py-20 mx-auto">
      <h2>Not Found</h2>
      <p className='lead text-2xl fill-red-500 '>Could not find requested resource</p>
      <Link className='text-blue-400 hover:underline' href="/">Return Home</Link>
    </div>
  )
}