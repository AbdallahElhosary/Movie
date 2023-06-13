import React from 'react'

function Loading() {
  return (
    <div className='container-loading'>
        <div className='loader'>
            <div className='loader--dot'></div>
            <div className='loader--dot'></div>
            <div className='loader--dot'></div>
            <div className='loader--dot'></div>
            <div className='loader--dot'></div>
            <div className='loader--dot'></div>
            <div className='loader--text'></div>
        </div>
    </div>
  )
}

export default Loading