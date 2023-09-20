import MyWork from '@/components/landing/my-work'
import Welcome from '@/components/landing/welcome'
import Navbar from '@/components/ui/navbar'

export default function Home() {
  return (
    <main className='w-full'>
      <Navbar />
      <Welcome />
      <MyWork />
    </main>
  )
}
