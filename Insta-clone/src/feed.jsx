import React from 'react'
import Stories from './Stories'
import Posts from './Post'

function Feed() {
  return (
    <div>
        <div className='story bg-info'><Stories/></div>
        <div><Posts/></div>
    </div>
  )
}

export default Feed