import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {

    const [profile,setprofile]= useState(null);
 
 useEffect(()=>{
  axios.get('http://localhost:3000/profile').
  then((data)=>{setprofile(data.data[0])})
 },[])

 function HandOnChange(event){    //doubt
    setprofile((prev)=>({
        ...prev,
        [event.target.name] : event.target.value
    }))
}
const HandleUpdate = async()=>{
    axios.put('http://localhost:3000/profile/1',profile).
    then(console.log('updated')).catch(err=>{console.log(err)})
}
    return (
    <div className='m-5'>
        {
            profile ? (
             <div>
                <img src={profile.profilePic} className='profile rounded-circle' alt="profile" />
                <h5>{profile.username}</h5>

                <input
                    type='text'
                    name="username"
                    value={profile.username}
                    className='form-control my-4'
                    onChange={HandOnChange}
                />
               <input
                    type='text'
                    name="profilepic"
                    value={profile.profilePic}
                    className='form-control'
                    onChange={HandOnChange}
                />

                <button onClick={HandleUpdate} className='btn btn-primary  my-4'>Update</button>
             </div>
            )
            :     
            (
                <div>loading</div>
            )
        }
        </div>
  )
}

export default Profile