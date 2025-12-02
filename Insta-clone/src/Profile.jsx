import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {

    const [profile,setprofile]= useState(null);
    const [followers,setfollowers]=useState([]);
    const[unfollowed,setunfollowed] = useState(0);

 useEffect(()=>{
  axios.get('http://localhost:3000/profile').
  then((data)=>{setprofile(data.data[0])}).catch(err=>{console.log(err)})
 
  axios.get('http://localhost:3000/followers').
  then((data)=>{setfollowers(data.data)}).catch(err=>{console.log(err)})
},[])

 function HandOnChange(event){    //doubt
    setprofile((prev)=>({
        ...prev,
        [event.target.name] : event.target.value
    }))
}
const HandleUpdate = async()=>{   //onceagain
    axios.put('http://localhost:3000/profile/1',profile).
    then(console.log('updated')).catch(err=>{console.log(err)})

}  

const handleunfollow = async (id)=>{
    axios.delete(`http://localhost:3000/followers/${id}`).then(alert('unfollowed')).then(setunfollowed(!unfollowed))
    .catch(err=>{console.log(err)})
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

        {followers.length>0 ? (
            followers.map(follower=>(
                <div key={follower.id} className='d-flex my-2'>
                   {follower.username}
                   <button onClick={()=>{handleunfollow(follower.id)}} className='btn btn-danger ms-auto'>Unfollow</button>
                </div>


            ))
        ):(
            <div>loading</div>
        )}
        </div>
  )
}

export default Profile