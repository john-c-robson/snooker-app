import { SnookerItemType } from '@/types'
import React from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'
import { useSnookerStore } from '@/stores/useSnookerStore'

interface SnookerItemProps {
  snookers: SnookerItemType
}

export default function TodoItem({ snookers }: SnookerItemProps) {
  const { updatePlayer1Name, deleteGame } = useSnookerStore()

  return (
    <>
      <div
        key={snookers.id}
        className="flex flex-row justify-between items-center py-2"
      >
        <input
          className="bg-slate-700 me-4 p-2 rounded-md grow"
          type="text"
          value={snookers.player1name}
          onChange={(e) => updatePlayer1Name(snookers.id, e.target.value)}
        />

        <button
          className="bg-red-600 hover:bg-red-400 ms-4 p-3 rounded-md text-white"
          onClick={() => deleteGame(snookers.id)}
        >
          <FaRegTrashCan />
        </button>
      </div>
    </>
  )
}
