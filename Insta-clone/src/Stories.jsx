import React, { useEffect, useState } from 'react'

function Stories() {
  
  const [stories,setstories]= useState([]);
   
  useEffect(()=>{
fetch('http://localhost:3000/story').
then((response)=>response.json()).
then((data)=>{setstories(data)}).
catch((err)=>{console.log(err)})

  },[]);

  return (
    <div className='story d-flex'>
      {stories.length > 0 ? (
       stories.map((story)=>(
        <div key={story.id} className='mx-1'>
          <div className='gradient-border'>
          <img src={story.profilePic} alt="dp" className='story-dp rounded-circle ' />
          </div>
        
        <p className='text-truncate ' style={{width:"50px"}}>{story.username}</p>
        </div>
         ))

      ):(
        <p>Loading...</p>
      )}

    </div>
  );
}

export default Stories