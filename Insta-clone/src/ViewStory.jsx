import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewStory() {
  const { id } = useParams();          // <-- destructure so id is a string
  const [story, setStory] = useState(null);
  const [error, setError] = useState(null);

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
  return (
    <div>
      {story ? <div>
        <img className="vh-100 justify-content-center" src={story.imageUrl} alt="image" />
      </div> 
      : 
      
      <div>Loading..</div>}
    </div>
  );
}