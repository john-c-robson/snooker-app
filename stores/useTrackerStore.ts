import { TrackerType } from '@/types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface ITrackerStore {
  tracker: TrackerType
  updatePlayer1Name: (player1name: string) => void
  updatePlayer2Name: (player2name: string) => void
  updateScore: (points: number) => void
  switchPlayer: () => void
  resetScreen: () => void
  switchColour: () => void
  addMatchEvent: (player: string, ballPotted: number) => void
}

export const useTrackerStore = create<ITrackerStore>()(
  persist(
    (set) => ({
      tracker: {
        player1name: '',
        player2name: '',
        player1score: 0,
        player2score: 0,
        playerselector: true,
        colourLock: true,
        matchHistory: [],
      } as TrackerType,

      updatePlayer1Name: (name) => {
        set((state) => ({
          tracker: {
            ...state.tracker,
            player1name: name,
          },
        }))
      },

      updatePlayer2Name: (name) => {
        set((state) => ({
          tracker: {
            ...state.tracker,
            player2name: name,
          },
        }))
      },

      updateScore: (points) => {
        set((state) => ({
          tracker: {
            ...state.tracker,
            player1score: state.tracker.playerselector
              ? state.tracker.player1score + points
              : state.tracker.player1score,
            player2score: !state.tracker.playerselector
              ? state.tracker.player2score + points
              : state.tracker.player2score,
          },
        }))
      },

      switchPlayer: () => {
        set((state) => ({
          tracker: {
            ...state.tracker,
            playerselector: !state.tracker.playerselector,
            colourLock: true,
          },
        }))
      },

      switchColour: () => {
        set((state) => ({
          tracker: {
            ...state.tracker,
            colourLock: !state.tracker.colourLock,
          },
        }))
      },

      addMatchEvent: (player: string, ballPotted: number) => {
        set((state) => ({
          tracker: {
            ...state.tracker,
            matchHistory: [
              ...state.tracker.matchHistory,
              {
                player,
                ballPotted,
                timestamp: Date.now(),
              },
            ],
          },
        }))
      },

      resetScreen: () => {
        set((state) => ({
          tracker: {
            ...state.tracker,
            player1name: '',
            player2name: '',
            player1score: 0,
            player2score: 0,
            playerselector: true,
            colourLock: true,
            matchHistory: [],
          },
        }))
      },
    }),
    {
      name: 'johns-snooker-app_tracker-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
