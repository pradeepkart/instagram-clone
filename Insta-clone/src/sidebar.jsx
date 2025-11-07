import React from 'react';
import instatext from '../src/assets/OIP.png';

function Sidebar() {
  return (
    <div className='m-3 position-fixed'>
    <div className='d-flex flex-column gap-3'>
        <img className='logo-text' src={instatext} alt="Insta Text" />
        <div><i className="bi bi-house-heart-fill"></i>Home</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div><i className="bi bi-compass-fill"></i>Explore</div>
        <div><i className="bi bi-file-play-fill"></i>Reels</div>
        <div><i className="bi bi-send"></i>Messages</div>
        <div><i className="bi bi-heart"></i>Notification</div>
        <div><i className="bi bi-plus-square"></i>Create</div>
        <div><i className="bi bi-person-circle"></i>Profile</div>
        </div>
        <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
            <div><i className="bi bi-threads"></i>Threads</div>
            <div><i className="bi bi-three-dots-vertical"></i>More</div>
        </div>

    </div>
    
    
  )
}

export default Sidebar