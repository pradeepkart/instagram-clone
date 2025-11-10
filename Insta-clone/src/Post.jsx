import React, { useEffect, useState } from 'react'

function Posts() {
   
    const [posts,setposts]= useState([]);

    useEffect(()=>{
     fetch('http://localhost:3000/posts')
     .then((response)=>response.json())
     .then((data=>setposts(data)))
     .catch(err=>console.log(err))
    },[]);
  
  
    return (
    <div className='d-flex justify-content-center m-3'>
       {posts.length > 0 ? (
        <div>
            {posts.map((post)=>(
                <div key={post.id}>
                    <div className='d-flex gap-2 my-3'>
                        <img className='dp rounded-circle' src={post.profilePic} alt="profile_pic" />
                         <h6>{post.username}</h6>
                    </div>
                    <img className='post' src= {post.imageUrl} alt="post" />
                    <div className='icons'>
                    <i className="bi bi-heart"></i>
                    <i className="bi bi-chat"></i>
                    <i className="bi bi-send"></i>
                    </div>
                    <div>
                        <h6><b>{post.likes} Likes</b></h6>
                    </div>
                    <p>{post.caption}</p>
                </div>
            ))}
        </div>
       ):(
        <div>
            loading...
        </div>
       )}
    </div>
  )
}

export default Posts