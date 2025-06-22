'use client'

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  const handleSelect = (role: 'admin' | 'user') => {
    router.push(`/${role}`)
  }

  return (
    <div className="h-screen flex items-center justify-center flex-col space-y-4">
      <h1 className="text-2xl font-bold">T AS ACHETE QUOI?????????????????? STP</h1>
      {/* <button onClick={() => handleSelect('admin')} className="px-4 py-2 bg-pink-500 text-white rounded-full">Je suis elle ❤️</button>
      <button onClick={() => handleSelect('user')} className="px-4 py-2 bg-blue-500 text-white rounded-full">Je suis lui 😎</button> */}
    </div>
  )
}
