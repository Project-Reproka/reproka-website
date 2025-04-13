import Navbar from '@/components/generic/navbar'

export const metadata = {
  title: 'not Home // Reproka Website'
}

export default function Home() {
  return (
    <div className="font-sans min-h-screen w-full flex flex-row items-center gap-9 text-center">
      <Navbar language={'English'} />

      <div>
        <span className="text-6xl">super probably placeholder text</span>
        <img src="https://i.ytimg.com/vi/201EZ5ItSm4/maxresdefault.jpg" />
      </div>
    </div>
  )
}
