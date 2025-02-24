import { SnookerItemType } from '@/types'
import React from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'
import { useSnookerStore } from '@/stores/useSnookerStore'
import { FaLockOpen } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'

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
    lockGame,
  } = useSnookerStore()

  return (
    <>
      <div
        key={games.id}
        className="flex flex-row justify-between items-center bg-slate-700 shadow-black shadow-md mt-6 p-2 py-2 rounded-md"
      >
        <button
          className={`${
            games.locked
              ? 'bg-blue-600 hover:bg-blue-400'
              : 'bg-red-600 hover:bg-red-400'
          } shadow-gray-800 shadow-md ms-4 mr-4 p-3 rounded-md text-white`}
          onClick={() => lockGame(games.id)}
        >
          {games.locked ? <FaLock /> : <FaLockOpen />}
        </button>

        <div className="mb-1 ml-4 text-left grow">
          <p className="mb-1 ml-4">Player 1</p>
          <input
            className="bg-slate-600 shadow-gray-800 shadow-md me-4 mb-4 ml-4 p-2 rounded-lg grow"
            type="text"
            value={games.player1name}
            onChange={(e) => updatePlayer1Name(games.id, e.target.value)}
            disabled={games.locked}
          />
          <p className="mb-1 ml-4">Player 2</p>
          <input
            className="bg-slate-600 shadow-gray-800 shadow-md me-4 mb-4 ml-4 p-2 rounded-md grow"
            type="text"
            value={games.player2name}
            onChange={(e) => updatePlayer2Name(games.id, e.target.value)}
            disabled={games.locked}
          />
        </div>
        <div className="mb-1 ml-4 text-left grow">
          <p className="mb-1">Player 1 Score</p>
          <input
            className="bg-slate-600 shadow-gray-800 shadow-md me-4 mb-4 p-2 rounded-md grow"
            type="text"
            value={games.player1score}
            onChange={(e) => updatePlayer1Score(games.id, e.target.value)}
            disabled={games.locked}
          />
          <p className="mb-1">Player 2 Score</p>
          <input
            className="bg-slate-600 shadow-gray-800 shadow-md me-4 mb-4 p-2 rounded-md grow"
            type="text"
            value={games.player2score}
            onChange={(e) => updatePlayer2Score(games.id, e.target.value)}
            disabled={games.locked}
          />
        </div>

        <button
          className={`${
            games.locked ? 'hidden' : 'bg-red-600 hover:bg-red-400'
          }  shadow-gray-800 shadow-md ms-4 mr-4 p-3 rounded-md text-white`}
          onClick={() => deleteGame(games.id)}
        >
          <FaRegTrashCan />
        </button>
      </div>
    </>
  )
}
