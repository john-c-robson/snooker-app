import { useTrackerStore } from '@/stores/useTrackerStore'
import React from 'react'
import { LuSave } from 'react-icons/lu'
import { RxReset } from 'react-icons/rx'
import { FaCircle } from 'react-icons/fa'
import { TbStarFilled } from 'react-icons/tb'
import { ImBlocked } from 'react-icons/im'

export default function SnookerTracker() {
  const {
    tracker,
    updatePlayer1Name,
    updatePlayer2Name,
    updateScore,
    switchPlayer,
    resetScreen,
    switchColour,
  } = useTrackerStore()

  const handleScoreUpdate = (points: number) => {
    updateScore(points)
  }

  return (
    <div className="items-center">
      <h1 className="flex justify-center pt-4 text-4xl text-center">
        Game Tracker
      </h1>
      <div className="flex justify-evenly items-center mb-4 pt-4">
        <div className="">
          <button className="bg-rose-700 hover:bg-rose-500 shadow-gray-800 shadow-md p-3 rounded-md text-white">
            <RxReset className="w-8 h-8" onClick={() => resetScreen()} />
          </button>
        </div>
        <div className="">
          <button className="bg-green-700 hover:bg-green-500 shadow-gray-800 shadow-md p-3 rounded-md text-white">
            <LuSave className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      <div className="flex flex-col bg-slate-700 rounded-lg">
        <div className="flex justify-center">
          <div className="flex flex-col items-start bg-slate-700 p-2 rounded-lg">
            {tracker.playerselector ? (
              <TbStarFilled className="mb-2 w-12 h-12 text-yellow-400" />
            ) : (
              <TbStarFilled className="mb-2 w-12 h-12 text-slate-700" />
            )}

            <div className="flex flex-col items-center w-full">
              <p className="mb-1 ml-4">Player 1 Name</p>
              <input
                className="bg-slate-600 shadow-gray-800 shadow-md mb-4 p-2 rounded-lg w-48 text-center"
                type="text"
                value={tracker?.player1name || ''}
                onChange={(e) => updatePlayer1Name?.(e.target.value)}
              />

              <p className="mb-1 ml-4">Player 1 Score</p>
              <input
                className="bg-slate-600 shadow-gray-800 shadow-md p-2 rounded-lg w-48 text-center"
                type="text"
                value={tracker?.player1score || 0}
              />
            </div>
          </div>

          <div className="flex flex-col items-end bg-slate-700 p-2 rounded-lg">
            {tracker.playerselector ? (
              <TbStarFilled className="mb-2 w-12 h-12 text-slate-700" />
            ) : (
              <TbStarFilled className="mb-2 w-12 h-12 text-yellow-400" />
            )}

            <div className="flex flex-col items-center w-full">
              <p className="mr-4 mb-1">Player 2 Name</p>
              <input
                className="bg-slate-600 shadow-gray-800 shadow-md mb-4 p-2 rounded-lg w-48 text-center"
                type="text"
                value={tracker?.player2name || ''}
                onChange={(e) => updatePlayer2Name?.(e.target.value)}
              />

              <p className="mr-4 mb-1 center">Player 2 Score</p>
              <input
                className="bg-slate-600 shadow-gray-800 shadow-md p-2 rounded-lg w-48 text-center"
                type="text"
                value={tracker?.player2score || 0}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-500 shadow-md m-4 px-6 py-3 rounded-lg font-bold text-white"
            onClick={() => switchPlayer()}
          >
            Switch Player
          </button>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      <div className="flex justify-center items-center bg-slate-700 mt-4 mb-4 rounded-lg">
        <button
          onClick={() => {
            handleScoreUpdate(1)
            switchColour()
          }}
          disabled={!tracker.colourLock}
        >
          {tracker.colourLock ? (
            <FaCircle className="p-3 rounded-md w-16 h-16 text-red-700 hover:text-red-500" />
          ) : (
            <ImBlocked className="opacity-50 p-3 rounded-md w-16 h-16 text-white cursor-not-allowed" />
          )}
        </button>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      <div className="flex justify-evenly items-center bg-slate-700 mt-4 mb-4 rounded-lg">
        <button
          onClick={() => {
            handleScoreUpdate(2)
            switchColour()
          }}
          disabled={tracker.colourLock}
        >
          {!tracker.colourLock ? (
            <FaCircle className="m-2 rounded-md w-8 h-8 text-yellow-500 hover:text-yellow-300" />
          ) : (
            <ImBlocked className="opacity-50 m-2 rounded-md w-8 h-8 text-white cursor-not-allowed" />
          )}
        </button>
        <button
          onClick={() => {
            handleScoreUpdate(3)
            switchColour()
          }}
          disabled={tracker.colourLock}
        >
          {!tracker.colourLock ? (
            <FaCircle className="m-2 rounded-md w-8 h-8 text-green-700 hover:text-green-500" />
          ) : (
            <ImBlocked className="opacity-50 m-2 rounded-md w-8 h-8 text-white cursor-not-allowed" />
          )}
        </button>
        <button
          onClick={() => {
            handleScoreUpdate(4)
            switchColour()
          }}
          disabled={tracker.colourLock}
        >
          {!tracker.colourLock ? (
            <FaCircle className="m-2 rounded-md w-8 h-8 text-amber-900 hover:text-amber-800" />
          ) : (
            <ImBlocked className="opacity-50 m-2 rounded-md w-8 h-8 text-white cursor-not-allowed" />
          )}
        </button>
        <button
          onClick={() => {
            handleScoreUpdate(5)
            switchColour()
          }}
          disabled={tracker.colourLock}
        >
          {!tracker.colourLock ? (
            <FaCircle className="m-2 rounded-md w-8 h-8 text-blue-700 hover:text-blue-500" />
          ) : (
            <ImBlocked className="opacity-50 m-2 rounded-md w-8 h-8 text-white cursor-not-allowed" />
          )}
        </button>
        <button
          onClick={() => {
            handleScoreUpdate(6)
            switchColour()
          }}
          disabled={tracker.colourLock}
        >
          {!tracker.colourLock ? (
            <FaCircle className="m-2 rounded-md w-8 h-8 text-rose-500 hover:text-rose-300" />
          ) : (
            <ImBlocked className="opacity-50 m-2 rounded-md w-8 h-8 text-white cursor-not-allowed" />
          )}
        </button>
        <button
          onClick={() => {
            handleScoreUpdate(7)
            switchColour()
          }}
          disabled={tracker.colourLock}
        >
          {!tracker.colourLock ? (
            <FaCircle className="m-2 rounded-md w-8 h-8 text-black hover:text-neutral-800" />
          ) : (
            <ImBlocked className="opacity-50 m-2 rounded-md w-8 h-8 text-white cursor-not-allowed" />
          )}
        </button>
      </div>
    </div>
  )
}
