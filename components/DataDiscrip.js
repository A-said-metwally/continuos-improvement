import React from 'react'

function DataDiscrip({ar , en}) {
  return (
    <div>
        <div className=" flex text-blue-500 space-x-4">
            <h1 className="text-xl font-serif font-semibold">{en}</h1>
            <h1 className="text-xl font-serif font-semibold">{ar}</h1>
        </div>
    </div>
  )
}

export default DataDiscrip