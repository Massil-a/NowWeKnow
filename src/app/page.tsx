'use client'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl font-bold">Bienvenue sur nowweknow 💖</h1>
      <button
        className="px-4 py-2 bg-pink-500 text-white rounded-full"
        onClick={() => router.push('/admin')}
      >
        Je suis elle
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-full"
        onClick={() => router.push('/user')}
      >
        Je suis lui
      </button>
    </div>
  )
}
