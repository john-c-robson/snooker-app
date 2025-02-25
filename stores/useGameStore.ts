import { GameType } from '@/types'
import { v4 } from 'uuid'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface IGameStore {
  games: GameType[]
  addGame: () => void
  updatePlayer1Name: (id: string, player1name: string) => void
  updatePlayer1Score: (id: string, player1score: string) => void
  updatePlayer2Name: (id: string, player2name: string) => void
  updatePlayer2Score: (id: string, player2score: string) => void
  deleteGame: (id: string) => void
  lockGame: (id: string) => void
}

export const useSnookerStore = create<IGameStore>()(
  persist(
    (set) => ({
      games: [],

      addGame: () => {
        set((state) => ({
          games: [
            ...state.games,
            {
              id: v4(),
              player1name: 'player 1 name',
              player1score: '0',
              player2name: 'player 2 name',
              player2score: '0',
              locked: false,
            },
          ],
        }))
      },

      updatePlayer1Name: (id, name) => {
        set((state) => ({
          games: state.games.map((games) => {
            if (games.id === id) {
              games.player1name = name
            }
            return games
          }),
        }))
      },

      updatePlayer1Score: (id, score) => {
        set((state) => ({
          games: state.games.map((games) => {
            if (games.id === id) {
              games.player1score = score
            }
            return games
          }),
        }))
      },

      updatePlayer2Name: (id, name) => {
        set((state) => ({
          games: state.games.map((games) => {
            if (games.id === id) {
              games.player2name = name
            }
            return games
          }),
        }))
      },

      updatePlayer2Score: (id, score) => {
        set((state) => ({
          games: state.games.map((games) => {
            if (games.id === id) {
              games.player2score = score
            }
            return games
          }),
        }))
      },

      deleteGame: (id) => {
        set((state) => ({
          games: state.games.filter((games) => games.id !== id),
        }))
      },

      lockGame: (id: string) => {
        set((state) => ({
          games: state.games.map((game) =>
            game.id === id ? { ...game, locked: !game.locked } : game
          ),
        }))
      },
    }),
    {
      name: 'johns-snooker-app_game-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
