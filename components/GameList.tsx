import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import GameItem from './GameItem'
import { useSnookerStore } from '@/stores/useSnookerStore'

export default function GameList() {
  const { games, addGame } = useSnookerStore()

  return (
    <div className="p-8 w-full text-center">
      <button
        className="flex flex-row bg-green-600 px-2 py-1 rounded-md"
        onClick={addGame}
      >
        <FaPlus className="me-2 mt-1" />
        Add Game
      </button>

      <>
        {games.map((games) => (
          <GameItem key={games.id} games={games} />
        ))}
      </>
    </div>
  )
}
