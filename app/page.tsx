'use client'

import GameList from '@/components/GameList'

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center bg-slate-800 h-screen text-white">
        <div className="top bg-slate-900 shadow-slate-950 shadow-sm p-4 pt-12 w-full text-center">
          <h1>Snooker App</h1>
        </div>
        <GameList />
      </div>
    </>
  )
}
