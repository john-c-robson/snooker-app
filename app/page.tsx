'use client'
import GameList from '@/components/GameList'
import SnookerTracker from '@/components/SnookerTracker'
import { GiPoolTriangle } from 'react-icons/gi'
import { LiaThListSolid } from 'react-icons/lia'
import { useStateStore } from '@/stores/useStateStore'

export default function Home() {
  const { toggleScreenState, isScreenActive } = useStateStore()

  return (
    <div className="flex flex-col items-center bg-slate-800 min-h-screen text-white">
      <div className="bg-slate-900 shadow-md p-4 pt-12 w-full text-center">
        <h1 className="font-semibold text-xl">Snooker App</h1>
      </div>

      <h2 className="pt-6 text-lg">Switch Between History and Tracker</h2>

      <button
        onClick={toggleScreenState}
        className={`mt-4 px-4 py-4 rounded-lg font-medium text-white shadow-md transition ${
          isScreenActive
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isScreenActive ? (
          <GiPoolTriangle className="w-12 h-12" />
        ) : (
          <LiaThListSolid className="w-12 h-12" />
        )}
      </button>

      {isScreenActive ? <SnookerTracker /> : <GameList />}
    </div>
  )
}
