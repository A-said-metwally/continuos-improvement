import React from 'react'

function IssueDate({date}) {
  return (
    <div>
        <div className=" text-right p-3">
          <b className=" text-green-600 underline text-lg"> أخر إصدار : </b><span className=" text-gray-800">{date}</span>
        </div>
    </div>
  )
}

export default IssueDate