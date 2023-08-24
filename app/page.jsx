import Welcome from '@/components/landing/welcome'
import Navbar from '@/components/ui/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full'>
      <Navbar />
      <Welcome />
    </main>
  )
}
