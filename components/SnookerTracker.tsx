import React from 'react'
import { LuSave } from 'react-icons/lu'
import { RxReset } from 'react-icons/rx'

export default function SnookerTracker() {
  return (
    <div>
      <div className="flex justify-center items-center pt-14">
        <div className="ms-24 me-24">
          <button className="bg-rose-700 hover:bg-rose-500 shadow-gray-800 shadow-md p-3 rounded-md text-white">
            <RxReset className="w-8 h-8" />
          </button>
        </div>
        <div className="ms-24 me-24">
          <button className="bg-green-700 hover:bg-green-500 shadow-gray-800 shadow-md p-3 rounded-md text-white">
            <LuSave className="w-8 h-8" />
          </button>
        </div>
      </div>

      <div className="m-80"></div>

      <div className="flex justify-center items-center pt-14">
        <button className="bg-rose-700 hover:bg-rose-500 shadow-gray-800 shadow-md m-2 p-3 rounded-md text-white">
          <RxReset className="w-8 h-8" />
        </button>
        <button className="bg-green-700 hover:bg-green-500 shadow-gray-800 shadow-md m-2 p-3 rounded-md text-white">
          <LuSave className="w-8 h-8" />
        </button>
        <button className="bg-rose-700 hover:bg-rose-500 shadow-gray-800 shadow-md m-2 p-3 rounded-md text-white">
          <RxReset className="w-8 h-8" />
        </button>
        <button className="bg-green-700 hover:bg-green-500 shadow-gray-800 shadow-md m-2 p-3 rounded-md text-white">
          <LuSave className="w-8 h-8" />
        </button>
        <button className="bg-rose-700 hover:bg-rose-500 shadow-gray-800 shadow-md m-2 p-3 rounded-md text-white">
          <RxReset className="w-8 h-8" />
        </button>
        <button className="bg-green-700 hover:bg-green-500 shadow-gray-800 shadow-md m-2 p-3 rounded-md text-white">
          <LuSave className="w-8 h-8" />
        </button>
        <button className="bg-green-700 hover:bg-green-500 shadow-gray-800 shadow-md m-2 p-3 rounded-md text-white">
          <LuSave className="w-8 h-8" />
        </button>
      </div>
    </div>
  )
}
