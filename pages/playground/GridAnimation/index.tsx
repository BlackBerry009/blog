import React, { useState } from 'react'

export const GridDemo = () => {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <button
        onClick={() => {
          setOpen(!open)
        }}
        className="text-black border-none p-1 my-2 rounded-xl bg-gradient-to-tr from-pink-200 to-green-200"
      >
        Open me
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden mt-2 border-t-2 border-gray-50">
          <div>the first row</div>
          <div>the second row</div>
          <div>the third row</div>
        </div>
      </div>
    </div>
  )
}
