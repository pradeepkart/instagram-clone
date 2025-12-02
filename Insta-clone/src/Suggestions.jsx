import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Suggestions() {
 
 const [profile,setprofile] = useState([]);
 const [Suggestions,setSuggestions]=useState([]);



 useEffect(()=>{
  fetch("http://localhost:3000/profile").
  then((data)=>data.json()).
  then((data)=>{setprofile(data[0])}).
  catch((err)=>{console.log(err)})


  fetch("http://localhost:3000/Suggestions").
  then((data)=>data.json()).
  then((data)=>{setSuggestions(data)}).
  catch((err)=>{console.log(err)})

 },[])

 const handlefollow = async(id,username)=>{
  axios.post('http://localhost:3000/followers',{"id":id, "username":username}).
  then(alert('followed'))
  .catch(err=>{console.log(err)})

 }
 
  return (
    
  <div>
    <div className='suggestions w-75 m-4'>
    {
      profile ?
    <div className='d-flex gap-2 my-3'>
    <img className='dp rounded-circle' src={profile.profilePic} alt="profile_pic" />
     <h6>{profile.username}</h6>
     <p className='ms-auto text-primary'>Switch</p>
   </div>
   :
   <p>Loading...</p>}
   <div className='d-flex '>
    <p>Suggested for you</p>
    <b className='ms-auto'>see all</b>
   </div>

   {Suggestions.length > 0 ? (
        <div>
            {Suggestions.map((Suggestion)=>(
                <div key={Suggestion.id}>
                    <div className='d-flex gap-2 my-2'>
                        <img className='dp rounded-circle' src={Suggestion.profilePic} alt="profile_pic" />
                         <h6>{Suggestion.username}</h6>
                         <button className=' btn btn-primary ms-auto' onClick={()=>{handlefollow(Suggestion.id,Suggestion.username)}}>Follow</button>
                    </div>
                </div>
            ))}
        </div>
       ):(
        <div>
            loading...
        </div>
       )}

</div>

</div>
  )
}

export default Suggestions