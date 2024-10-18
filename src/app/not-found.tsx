import Link from 'next/link'
 import Image from 'next/image'
 export const metadata ={ 
    title: "Not-Found"

 }
export default function NotFound() {
  return (
    <div className='px-2 w-full'>
        <div className='mx-auto py-4 flex flex-col justify-center items-center gap-4'>
      <h2 className='text-3xl'>Not Found</h2>
      <p>Could not find requested resource</p>
  
      <Image className='m-0 rounded-xl'
       src="/images/notf.png"     // image not showing

      width={300}
      height={300}
      sizes="300px"
      alt='Page not found'
      priority={true}
      title='page NA\'
     />    </div></div>
  )
}