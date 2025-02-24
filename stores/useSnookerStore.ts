import { SnookerItemType } from '@/types'
import { v4 } from 'uuid'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface ISnookerStore {
  snookers: SnookerItemType[]
  addGame: () => void
  updatePlayer1Name: (id: string, player1name: string) => void
  deleteGame: (id: string) => void
}

export const useSnookerStore = create<ISnookerStore>()(
  persist(
    (set) => ({
      snookers: [],

      addGame: () => {
        set((state) => ({
          snookers: [
            ...state.snookers,
            {
              id: v4(),
              player1name: 'player 1 name',
              player1score: '0',
              player2name: 'player 2 name',
              player2score: '0',
            },
          ],
        }))
      },

      updatePlayer1Name: (id, player1name) => {
        set((state) => ({
          snookers: state.snookers.map((snookers) => {
            if (snookers.id === id) {
              snookers.player1name = player1name
            }
            return snookers
          }),
        }))
      },

      deleteGame: (id) => {
        set((state) => ({
          snookers: state.snookers.filter((snookers) => snookers.id !== id),
        }))
      },
    }),
    {
      name: 'johns-todo-app_todo-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
