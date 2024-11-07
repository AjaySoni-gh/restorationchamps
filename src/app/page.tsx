import Link from 'next/link'

import React from 'react'

const page = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-950 to-black bg-cover bg-center">
      <main className='flex flex-col justify-center text-centre max-w-5xl mx-auto h-dvh'>

      <div className='flex flex-col gap-6 p-12 rounded-xl bg-indigo-950 -4/5 sm:max-w-96 mx-auto text-white text-center sm:text-2xl'>
        <h1 className='font-bold text-zinc-400'>Admins pc <br /> Restoration Champs</h1>
        <address className='text-zinc-400'>
          800 Matheson bvld <br />
          Mississauga, ON L5V
        </address>
        <p className='text-zinc-400'>
          Open Mon-Fri: 9AM - 5PM
        </p>
        <Link href='tel: 4375521105' className='hower:underline text-zinc-400'>
         4375521105
        </Link>
      </div>

      </main>
    </div>
  )
}

export default page
