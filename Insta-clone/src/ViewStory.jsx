import React, { useEffect, useState } from "react";
import { useParams,Link,useNavigate } from "react-router-dom";

export default function ViewStory() {
  const { id,totalid } = useParams();          // <-- destructure so id is a string
  const [story, setStory] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;                   // guard: don't fetch until id exists

    fetch(`http://localhost:3000/story/${id}`) // <-- BACKTICKS here!
      .then(res => {
        if (!res.ok) throw new Error(res.status + " " + res.statusText);
        console.log(res);
        return res.json();
      
      })
      .then(data => setStory(data))
      .catch(err => {
        console.error("fetch error:", err);
        setError(err.message);
      });
  }, [id]);
  if (error) return <div>Error: {error}</div>;

  if(id>totalid || id==0){
    navigate('/');
  }
 
  return (
    <div>
      {story ? <div className="d-flex justify-content-center align-items-center">
        <Link to={`http://localhost:5173/story/${Number(id)-1}/${totalid}`}><i class="bi bi-arrow-left-circle"></i></Link>
        <img className="vh-100 " src={story.imageUrl} alt="image" />
        <Link to={`http://localhost:5173/story/${Number(id)+1}/${totalid}`}><i class="bi bi-arrow-right-circle"></i></Link>
      </div> 
      : 
      
      <div>Loading..</div>}
    </div>
  );
}