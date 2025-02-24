import { SnookerItemType } from '@/types'
import React from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'
import { useSnookerStore } from '@/stores/useSnookerStore'

interface SnookerItemProps {
  games: SnookerItemType
}

export default function GameItem({ games }: SnookerItemProps) {
  const {
    updatePlayer1Name,
    updatePlayer1Score,
    updatePlayer2Name,
    updatePlayer2Score,
    deleteGame,
  } = useSnookerStore()

  return (
    <>
      <div
        key={games.id}
        className="flex flex-row justify-between items-center bg-slate-700 mt-6 p-2 py-2 rounded-md"
      >
        <div>
          <p className="ml-4 text-left">Player 1</p>
          <input
            className="bg-slate-600 me-4 mb-4 ml-4 p-2 rounded-md grow"
            type="text"
            value={games.player1name}
            onChange={(e) => updatePlayer1Name(games.id, e.target.value)}
          />
          <p className="ml-4 text-left">Player 2</p>
          <input
            className="bg-slate-600 me-4 mb-4 ml-4 p-2 rounded-md grow"
            type="text"
            value={games.player2name}
            onChange={(e) => updatePlayer2Name(games.id, e.target.value)}
          />
        </div>
        <div>
          <p className="text-left">Player 1 Score</p>
          <input
            className="bg-slate-600 me-4 mb-4 p-2 rounded-md grow"
            type="text"
            value={games.player1score}
            onChange={(e) => updatePlayer1Score(games.id, e.target.value)}
          />
          <p className="text-left">Player 2 Score</p>
          <input
            className="bg-slate-600 me-4 mb-4 p-2 rounded-md grow"
            type="text"
            value={games.player2score}
            onChange={(e) => updatePlayer2Score(games.id, e.target.value)}
          />
        </div>
        <button
          className="bg-red-600 hover:bg-red-400 ms-4 mr-4 p-3 rounded-md text-white"
          onClick={() => deleteGame(games.id)}
        >
          <FaRegTrashCan />
        </button>
      </div>
    </>
  )
}
