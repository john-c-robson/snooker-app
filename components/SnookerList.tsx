import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { useSnookerStore } from '@/stores/useSnookerStore'

export default function TodoList() {
  const { addGame } = useSnookerStore()

  return (
    <div className="p-8 w-full text-center">
      <button
        className="flex flex-row bg-green-600 px-2 py-1 rounded-md"
        onClick={addGame}
      >
        <FaPlus className="me-2 mt-1" />
        Add Game
      </button>

      <h1 className="py-3">In Progress Todos</h1>
    </div>
  )
}
