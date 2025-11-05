import React from 'react';
import instatext from '../src/assets/OIP.png';

function Sidebar() {
  return (
    <div className='m-3'>
    <div className='d-flex flex-column gap-3'>
        <img className='logo-text' src={instatext} alt="Insta Text" />
        <div><i class="bi bi-house-heart-fill"></i>Home</div>
        <div><i class="bi bi-search"></i>Search</div>
        <div><i class="bi bi-compass-fill"></i>Explore</div>
        <div><i class="bi bi-file-play-fill"></i>Reels</div>
        <div><i class="bi bi-send"></i>Messages</div>
        <div><i class="bi bi-heart"></i>Notification</div>
        <div><i class="bi bi-plus-square"></i>Create</div>
        <div><i class="bi bi-person-circle"></i>Profile</div>
        </div>
        <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
            <div><i class="bi bi-threads"></i>Threads</div>
            <div><i class="bi bi-three-dots-vertical"></i>More</div>
        </div>

    </div>
    
    
  )
}

export default Sidebar