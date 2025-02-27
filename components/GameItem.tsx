import { GameType } from '@/types'
import React from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'
import { useSnookerStore } from '@/stores/useGameStore'
import { FaLockOpen } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'

interface GameItemProps {
  games: GameType
}

export default function GameItem({ games }: GameItemProps) {
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
        className="flex flex-row justify-between items-center bg-slate-700 shadow-black shadow-md mt-6 p-2 py-2 rounded-md text-sm"
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

        <div className="text-center grow">
          <p className="mb-1">Player 1</p>
          <input
            className="bg-slate-600 shadow-gray-800 shadow-md me-1 mb-4 ml-1 pt-1 pb-1 rounded-lg w-5/6 text-center"
            type="text"
            value={games.player1name}
            onChange={(e) => updatePlayer1Name(games.id, e.target.value)}
            disabled={games.locked}
          />
          <p className="mb-1">Player 2</p>
          <input
            className="bg-slate-600 shadow-gray-800 shadow-md me-1 mb-4 ml-1 pt-1 pb-1 rounded-md w-5/6 text-center"
            type="text"
            value={games.player2name}
            onChange={(e) => updatePlayer2Name(games.id, e.target.value)}
            disabled={games.locked}
          />
        </div>
        <div className="text-center grow">
          <p className="mb-1">P1 Score</p>
          <input
            className="bg-slate-600 shadow-gray-800 shadow-md mb-4 pt-1 pb-1 rounded-md w-5/6 text-center"
            type="text"
            value={games.player1score}
            onChange={(e) => updatePlayer1Score(games.id, e.target.value)}
            disabled={games.locked}
          />
          <p className="mb-1">P2 Score</p>
          <input
            className="bg-slate-600 shadow-gray-800 shadow-md mb-4 pt-1 pb-1 rounded-md w-5/6 text-center"
            type="text"
            value={games.player2score}
            onChange={(e) => updatePlayer2Score(games.id, e.target.value)}
            disabled={games.locked}
          />
        </div>

        <button
          className={`${
            games.locked ? 'opacity-0' : 'bg-red-600 hover:bg-red-400'
          }  shadow-gray-800 shadow-md ms-4 mr-4 p-3 rounded-md text-white`}
          onClick={() => deleteGame(games.id)}
          disabled={games.locked}
        >
          <FaRegTrashCan />
        </button>
      </div>
    </>
  )
}
